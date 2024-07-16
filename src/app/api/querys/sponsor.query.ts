import { gql } from "@apollo/client";

const sponsorFields = `
id
    image {
      url
    }
    name
    description {
      raw
    }
  `;

export function sponsorQueryById(id: string) {
  return gql`
            query Sponsor {
            sponsor(where: { id: "${id}" }) {
                ${sponsorFields}
            }
        }
        `;
}

export function sponsorQueryAll() {
  return gql`
    query Sponsor {
        sponsors {
        ${sponsorFields}
        }
    }
    `;
}
