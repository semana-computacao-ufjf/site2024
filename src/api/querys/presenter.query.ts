import { gql } from "@apollo/client";

const presenterFields = `
id
    name
    bond
    description {
      raw
    } 
    events {
    id
    title}  
    `;

export function getPresenterByIdQuery(id: string) {
  return gql`
        query Presenter {
        presenter(where: { id: "${id}" }) {
            ${presenterFields}
        }
    }
    `;
}

export function getAllPresentersQuery() {
  return gql`
  query Presenter {
    presenters {
      ${presenterFields}
    }
  }
`;
}
