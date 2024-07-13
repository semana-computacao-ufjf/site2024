import { getClient } from "../apollo/apollo-client";
import {
  getAllEventsQuery,
  getEventByIdQuery,
  getEventsByTypeQuery,
  getEventsOnDateQuery,
} from "../querys/event.query";

const client = getClient();
export async function getAllEvents() {
  const { data } = await client.query({
    query: getAllEventsQuery(),
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

export async function getEventById(id: string) {
  const { data } = await client.query({
    query: getEventByIdQuery(id),
    context: {
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.event;
}

export async function getEventsByType(eventType: string) {
  const { data } = await client.query({
    query: getEventsByTypeQuery(eventType),
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

export async function getEventsOnDate(date: string) {
  const { data } = await client.query({
    query: getEventsOnDateQuery(date),
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
