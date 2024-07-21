import { Sponsor } from "@/types/sponsor";
import { getClient } from "../apollo/apollo-client";
import { sponsorQueryAll, sponsorQueryById } from "../querys/sponsor.query";

const client = getClient();

export async function getAllSponsors(): Promise<Sponsor[]> {
  const { data } = await client.query({
    query: sponsorQueryAll(),
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
    query: sponsorQueryById(id),
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

  return data.sponsor;
}
