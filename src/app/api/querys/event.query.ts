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

export function eventsQueryAll() {
  return gql`
  query Event {
    events {
      ${eventFields}
    }
  }
`;
}

export function eventQueryById(id: string) {
  return gql`
    query Event {
      event(where: { id: "${id}" }) {
        ${eventFields}
      }
    }
  `;
}

export function eventQueryByType(eventType: string) {
  return gql`
    query Event {
      events(where: {event_type: ${eventType}}) {
        ${eventFields}
      }
    }
  `;
}

export function eventQueryOnDate(date: string) {
  return gql`
    query Event {
      events(where: {schedule_gt: "${date}"}) {
        ${eventFields}
      }
    }
  `;
}
