import { Presenter } from "@/types/presenter";
import { getClient } from "../apollo/apollo-client";
import {
  getAllPresentersQuery,
  getPresenterByIdQuery,
} from "../querys/presenter.query";

const client = getClient();

export async function getAllPresenters(): Promise<Presenter[]> {
  const { data } = await client.query({
    query: getAllPresentersQuery(),
    context: {
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.presenters;
}

export async function getPresenterById(id: string): Promise<Presenter> {
  const { data } = await client.query({
    query: getPresenterByIdQuery(id),
    context: {
      fetchOptions: {
        next: {
          revalidate: 300,
        },
      },
    },
  });

  return data.presenter;
}
