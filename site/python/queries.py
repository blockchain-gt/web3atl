speakers = """
    query {
        page(where: { slug: "index" }) {
            title
            components {
                ... on SpeakersSection {
                    title
                    people(first: 100) {
                        id
                        name
                        company
                        title
                        bio {
                            html
                        }
                        image {
                            url
                        }
                    }
                }
            }
        }
    }
"""

delete_agenda = """
    mutation {
        deleteManyAgendaItemsConnection(first: 1000) {
            edges {
                node {
                    id
                }
            }
        }
    }
"""

add_agenda_item = """
    mutation m1(
        $title:String, 
        $description:String,
        $location:String,
        $startTime:DateTime,
        $endTime:DateTime,
        $category:String,
        $eventType:EventType,
        $eventLink:String,
        $id1:ID,
        $id2:ID,
        $id3:ID,
        $id4:ID,
        $id5:ID
        ){
        createAgendaItem(data: {
            title: $title
            description: $description
            location: $location
            startTime: $startTime
            endTime: $endTime
            category: $category
            eventType: $eventType
            eventLink: $eventLink
            agendaSpeakers: {
                connect: [
                    {id: $id1},
                    {id: $id2},
                    {id: $id3},
                    {id: $id4},
                    {id: $id5}
                ]
            }
        }) {
            id
        }
    }
"""

add_agenda_item_wo_link = """
    mutation m1(
        $title:String, 
        $description:String,
        $location:String,
        $startTime:DateTime,
        $endTime:DateTime,
        $category:String,
        $eventType:EventType,
        $id1:ID,
        $id2:ID,
        $id3:ID,
        $id4:ID,
        $id5:ID
        ){
        createAgendaItem(data: {
            title: $title
            description: $description
            location: $location
            startTime: $startTime
            endTime: $endTime
            category: $category
            eventType: $eventType
            agendaSpeakers: {
                connect: [
                    {id: $id1},
                    {id: $id2},
                    {id: $id3},
                    {id: $id4},
                    {id: $id5}
                ]
            }
        }) {
            id
        }
    }
"""


publish_agenda_item = """
    mutation {
        publishManyAgendaItemsConnection(first: 1000) {
            edges {
            node {
                id
            }
            }
        }
    }
"""

# DOES NOT WORK AS INTENDED :(
upsert_page = """
    mutation m2($id: ID) {
        upsertPage(
            where: {
                slug: "schedule"
            }
            upsert: {
                create: {
                    components: {
                    create: {
                        Schedule: {
                            agendaItems: {
                                connect: {
                                    id: $id
                                }
                            }
                        }
                    }
                    }
                }, 
                update: {
                    components: {
                    create: {
                        Schedule: {
                        data: {
                            agendaItems: {
                                connect: {
                                    id: $id
                                }
                            }
                        }
                        }
                    }
                    }
                }
            }
        ) {
            id
        }
    }
"""

publish_page = """
    mutation {
        publishManyPagesConnection(where: {
            slug: "schedule"
        }) {
            edges {
                node {
                    id
                }
            }
        }
    }
"""

delete_agenda_speakers = """
mutation {
  deleteManyAgendaSpeakersConnection(first: 1000) {
    edges {
      node {
        id
      }
    }
  }
}
"""

add_agenda_speaker = """
mutation ($id: ID) {
  createAgendaSpeaker(
    data: {
      person: {
        connect: {
          id: $id
        }
      }
    }) {
    id
  }
}
"""

publish_agenda_speakers = """
mutation {
  publishManyAgendaSpeakersConnection(first: 1000 to: PUBLISHED) {
    edges {
      node {
        id
      }
    }
  }
}
"""