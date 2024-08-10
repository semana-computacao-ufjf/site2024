import { gql } from "@apollo/client";

const presenterFields = `
id
    name
    bond
    description {
      text
  } 
      image {
      url
      }
    events {
    id
    title}  
`;

export function presenterQueryById(id: string) {
  return gql`
        query Presenter {
        presenter(where: { id: "${id}" }) {
            ${presenterFields}
        }
    }
    `;
}

export function presenterQueryAll() {
  return gql`
  query Presenter {
    presenters {
      ${presenterFields}
    }
  }
`;
}
