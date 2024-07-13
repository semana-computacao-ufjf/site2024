import { gql } from "@apollo/client";

const eventFields = `
  id
  location
  schedule
  title
  description {
    text
  }
  presenters {
    bond
    id
    name
    description {
      text
    }
  }
`;

export function getAllEventsQuery() {
  return gql`
  query Event {
    events {
      ${eventFields}
    }
  }
`;
}

export function getEventByIdQuery(id: string) {
  return gql`
    query Event {
      event(where: { id: "${id}" }) {
        ${eventFields}
      }
    }
  `;
}

export function getEventsByTypeQuery(eventType: string) {
  return gql`
    query Event {
      events(where: {event_type: ${eventType}}) {
        ${eventFields}
      }
    }
  `;
}

export function getEventsOnDateQuery(date: string) {
  return gql`
    query Event {
      events(where: {schedule_gt: "${date}"}) {
        ${eventFields}
      }
    }
  `;
}
