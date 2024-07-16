import { Sponsor } from "@/types/sponsor";
import { getClient } from "../apollo/apollo-client";
import {
  getAllSponsorsQuery,
  getSponsorByIdQuery,
} from "../querys/sponsor.query";

const client = getClient();

export async function getAllSponsors(): Promise<Sponsor[]> {
  const { data } = await client.query({
    query: getAllSponsorsQuery(),
    context: {
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.sponsors;
}

export async function getSponsorById(id: string): Promise<Sponsor> {
  const { data } = await client.query({
    query: getSponsorByIdQuery(id),
    context: {
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.sponsor;
}
