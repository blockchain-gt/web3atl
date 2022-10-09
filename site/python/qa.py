import pandas as pd
from hygraph import Hygraph
from google_sheets import Agenda
from pprint import pprint

h = Hygraph()
a = Agenda()
d = {
    6:"G",
    7:"H",
    8:"I",
    9:"J",
    10:"K"
}

def generate_report():
    # speakers in agenda not in hygraph
    agenda_speakers = set(a.speakers)
    hygraph_speakers = set(h.speakers)
    a_not_in_h = []
    for speaker in agenda_speakers:
        if speaker not in hygraph_speakers:
            a_not_in_h.append(speaker)
    df1 = pd.DataFrame(data=a_not_in_h,columns=["name"])
    
    # speakers in agenda items not in hygraph
    df2 = pd.DataFrame(a.items[1:], columns=a.items[0])
    df2_red_cells = []
    row_num = 2
    for _, row in df2.iterrows():
        # speaker 1, speaker 2, ..., moderator
        for col in [6,7,8,9,10]:
            col_name = df2.columns[col]
            if row[col_name] and row[col_name] not in hygraph_speakers:
                df2_red_cells.append(f"{d[col]}{row_num}")
        row_num += 1

    # speakers in agenda items not in hygraph
    df3 = pd.DataFrame(a.items[1:], columns=a.items[0])
    df3_red_cells = []
    row_num = 2
    for _, row in df3.iterrows():
        # speaker 1, speaker 2, ..., moderator
        for col in [6,7,8,9,10]:
            col_name = df3.columns[col]
            if row[col_name] and row[col_name] not in agenda_speakers:
                df3_red_cells.append(f"{d[col]}{row_num}")
        row_num += 1

    # write to excel and add formating
    with pd.ExcelWriter("qa_report.xlsx", engine="xlsxwriter") as writer:
        df1.to_excel(writer, sheet_name="ConfimedSpeakersNotInHygraph", index=False)
        df2.to_excel(writer, sheet_name="AgendaSpeakersNotInHygraph", index=False)
        df3.to_excel(writer, sheet_name="AgendaSpeakersNotInSpeakers", index=False)
        workbook = writer.book
        format = workbook.add_format({"bg_color": "red"})
        df2_worksheet = writer.sheets["AgendaSpeakersNotInHygraph"]
        for cell in df2_red_cells:
            df2_worksheet.conditional_format(cell, {'type':'no_blanks','format':format})
        df3_worksheet = writer.sheets["AgendaSpeakersNotInSpeakers"]
        for cell in df3_red_cells:
            df3_worksheet.conditional_format(cell, {'type':'no_blanks','format':format})


if __name__ == "__main__":
    generate_report()