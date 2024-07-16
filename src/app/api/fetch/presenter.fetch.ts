import { Presenter } from "@/types/presenter";
import { getClient } from "../apollo/apollo-client";
import {
  presenterQueryAll,
  presenterQueryById,
} from "../querys/presenter.query";

const client = getClient();

export async function getAllPresenters(): Promise<Presenter[]> {
  const { data } = await client.query({
    query: presenterQueryAll(),
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
    query: presenterQueryById(id),
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

  return data.presenter;
}
