from __future__ import print_function

import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

class Agenda:
    
    SPREADSHEET_ID = "1TsVVJHaGxGjawxx69nfwZwP68_x8v9eOS3_k7gHo2rA"
    AGENDA_RANGE = "Agenda V3 Hygraph!A:L"
    SPEAKERS_RANGE = "Speakers Hygraph"

    def __init__(self, fetch_now=True):
        creds = self._auth()
        try:
            service = build("sheets", "v4", credentials=creds)
            self.sheet = service.spreadsheets()
        except HttpError as err:
            print(err)
            exit()
        self.items = []
        self.speakers = []
        if fetch_now:
            self.set_items()
            self.set_speakers()

    def _auth(self):
        creds = None
        if os.path.exists("token.json"):
            creds = Credentials.from_authorized_user_file("token.json", SCOPES)
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    "credentials.json", SCOPES)
                creds = flow.run_local_server(port=0)
            with open("token.json", "w") as token:
                token.write(creds.to_json())
        return creds

    def _get_subsheet_data(self,range):
        try:
            result = self.sheet.values().get(spreadsheetId=Agenda.SPREADSHEET_ID,
                                        range=range).execute()
            values = result.get("values", [])
            if not values:
                print("No data found.")
                return []
            return values
        except HttpError as err:
            print(err)
            exit()
    
    def _clean_items(self):
        num_cols = len(self.items[0])
        for row in self.items[1:]:
            row.extend(["",]*(num_cols-len(row)))

    def set_items(self):
        self.items = self._get_subsheet_data(range=Agenda.AGENDA_RANGE)
        self._clean_items()

    def get_items(self):
        if self.items:
            return self.items
        self.items = self._get_subsheet_data(range=Agenda.AGENDA_RANGE)
        self._clean_items()
        return self.items

    def _clean_speakers(self):
        exclude = ["FALSE", "Name"]
        self.speakers = [i[0].strip() for i in self.speakers if i and i[0].strip() not in exclude]

    def set_speakers(self):
        self.speakers = self._get_subsheet_data(range=Agenda.SPEAKERS_RANGE)
        self._clean_speakers()

    def get_speakers(self):
        if self.speakers:
            return self.speakers
        self.speakers = self._get_subsheet_data(range=Agenda.SPEAKERS_RANGE)
        self._clean_speakers()
        return self.speakers

if __name__ == "__main__":
    a = Agenda(fetch_now=True)
    from pprint import pprint
    pprint(a.speakers)
    pprint(a.items)