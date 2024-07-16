import { getClient } from "../apollo/apollo-client";
import {
  eventQueryById,
  eventQueryByType,
  eventQueryOnDate,
  eventsQueryAll,
} from "../querys/event.query";

const client = getClient();
export async function getAllEvents(): Promise<Event[]> {
  const { data } = await client.query({
    query: eventsQueryAll(),
    context: {
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.events;
}

export async function getEventById(id: string): Promise<Event> {
  const { data } = await client.query({
    query: eventQueryById(id),
    context: {
      variables: {
        id,
      },
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.event;
}

export async function getEventsByType(eventType: string): Promise<Event[]> {
  const { data } = await client.query({
    query: eventQueryByType(eventType),
    context: {
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.events;
}

export async function getEventsOnDate(date: string): Promise<Event[]> {
  const { data } = await client.query({
    query: eventQueryOnDate(date),
    context: {
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.events;
}
