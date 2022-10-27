from python_graphql_client import GraphqlClient
from datetime import datetime
from nltk import distance as dist
import pandas as pd
import queries, requests

class Hygraph:

	client = GraphqlClient(endpoint="https://api-us-east-1.hygraph.com/v2/cl6isf8724r4g01uh7l9w44u3/master")

	def __init__(self, fetch_now=True):
		self.speakers = []
		self.speaker_ids = []
		self.speaker_name_to_id = {}
		self.speaker_name_to_agenda_speaker_id = {}
		if fetch_now:
			self.set_speakers()

	def set_speakers(self):
		self.speakers = []
		self.speaker_ids = []
		components = Hygraph.client.execute(query=queries.speakers)["data"]["page"]["components"]
		for component in components:
			if component.get("title", "") == "Speakers":
				for person in component["people"]:
					self.speakers.append(person["name"])
					self.speaker_ids.append(person["id"])
		self.speaker_name_to_id = dict(zip(self.speakers, self.speaker_ids))

	def get_speakers(self):
		if self.speakers:
			return self.speakers
		self.set_speakers()
		return self.speakers

	def _delete_agenda_speakers(self):
		Hygraph.client.execute(query=queries.delete_agenda_speakers, variables=None)
	
	def add_agenda_speakers(self):
		self._delete_agenda_speakers()
		if not self.speakers:
			self.set_speakers()
		for speaker, speaker_id in self.speaker_name_to_id.items():
			resp = Hygraph.client.execute(query=queries.add_agenda_speaker, variables={"id":speaker_id})
			self.speaker_name_to_agenda_speaker_id[speaker] = resp["data"]["createAgendaSpeaker"]["id"]
		self._publish_agenda_speakers()
		
	def _publish_agenda_speakers(self):
		Hygraph.client.execute(query=queries.publish_agenda_speakers, variables=None)

	def _get_agenda_speaker_id(self, speaker_name):
		# default null speaker
		# should probably adjust logic 
		selected_speaker_id = self.speaker_name_to_agenda_speaker_id[None]
		if not speaker_name:
			return selected_speaker_id
		for speaker, speaker_id in self.speaker_name_to_agenda_speaker_id.items():
			if not speaker:
				continue
			js_dist = dist.jaro_similarity(speaker, speaker_name)
			if js_dist > 0.95:
				selected_speaker_id = speaker_id
		return selected_speaker_id

	def _delete_agenda_items(self):
		Hygraph.client.execute(query=queries.delete_agenda, variables=None)

	def post_agenda(self, agenda_data):
		self._delete_agenda_items()
		self.agenda_item_ids = []
		print('Deleting Agenda Items...')
		for data in agenda_data:
			# resp = requests.post("https://api-us-east-1.hygraph.com/v2/cl6isf8724r4g01uh7l9w44u3/master",json={"query":queries.add_agenda_item, "variables":data})
			# if resp != 200:
			# 	print(queries.add_agenda_item)
			# 	print(data)
			# 	print(resp.text)
			# 	1/0
			# else:
			# 	print("success")
			if data.get("eventLink",""):
				query = queries.add_agenda_item
			else:
				query = queries.add_agenda_item_wo_link
			resp = Hygraph.client.execute(query=query, variables=data)
			self.agenda_item_ids.append(resp['data']['createAgendaItem']['id'])

		print('Publishing Agenda Items...')
		self._publish_agenda()
		print('Adding to Schedule...')
		self._add_agenda_items_to_schedule()
		
	def _publish_agenda(self):
		Hygraph.client.execute(query=queries.publish_agenda_item, variables=None)
		

	def _add_agenda_items_to_schedule(self):
		# for agenda_id in self.agenda_item_ids:
		# 	Hygraph.client.execute(query=queries.upsert_page,variables={'id':agenda_id})
		# Hygraph.client.execute(query=queries.publish_page, variables=None)
		print("\n\nIMPORTANT!!!!")
		print("Manually add agenda items to schedule page\n\n")

if __name__ == "__main__":
	h = Hygraph()

	print("Creating Agenda Speakers...")
	h.add_agenda_speakers()

	from google_sheets import Agenda
	a = Agenda()
	df = pd.DataFrame(a.items[1:], columns=a.items[0])
	data = []
	for _, row in df.iterrows():
		title = row["Topic"]
		description = ""
		location = row["Room"]
		hour, minute = row["Start Time"].strip().split(":")
		hour, minute = int(hour), int(minute)
		day = int(row["Day"])
		month = 11 if day <= 6 else 10
		adj = 4 if day != 6 else 5
		startTime = datetime(2022,month,day,hour,minute)
		startTime = startTime.strftime(f"%Y-%m-%dT%H:%M:00-0{adj}:00")
		hour, minute = row["End Time"].strip().split(":")
		hour, minute = int(hour), int(minute)
		day = int(row["Day"])
		endTime = datetime(2022,month,day,hour,minute)
		endTime = endTime.strftime(f"%Y-%m-%dT%H:%M:00-0{adj}:00")
		category = row["Type"]
		eventType = row["Event Type"]
		eventLink = row["Event Link"]
		id1 = h._get_agenda_speaker_id(row["Speaker 1"])
		id2 = h._get_agenda_speaker_id(row["Speaker 2"])
		id3 = h._get_agenda_speaker_id(row["Speaker 3"])
		id4 = h._get_agenda_speaker_id(row["Speaker 4"])
		id5 = h._get_agenda_speaker_id(row["Moderator"])
		if eventLink:
			data.append({
				"title":title,
				"description":description,
				"location":location,
				"startTime":startTime,
				"endTime":endTime,
				"category":category,
				"eventType":eventType,
				"eventLink":eventLink,
				"id1":id1,
				"id2":id2,
				"id3":id3,
				"id4":id4,
				"id5":id5
			})
		else:
			data.append({
				"title":title,
				"description":description,
				"location":location,
				"startTime":startTime,
				"endTime":endTime,
				"category":category,
				"eventType":eventType,
				"id1":id1,
				"id2":id2,
				"id3":id3,
				"id4":id4,
				"id5":id5
			})

	h.post_agenda(data)