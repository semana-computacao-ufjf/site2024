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

export function getSponsorByIdQuery(id: string) {
  return gql`
            query Sponsor {
            sponsor(where: { id: "${id}" }) {
                ${sponsorFields}
            }
        }
        `;
}

export function getAllSponsorsQuery() {
  return gql`
    query Sponsor {
        sponsors {
        ${sponsorFields}
        }
    }
    `;
}
