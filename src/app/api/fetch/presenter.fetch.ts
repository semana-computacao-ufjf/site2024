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

  return data.presenters.map((presenter: any) => ({
    id: presenter.id,
    name: presenter.name,
    description: presenter.description.raw.children
      .map((child: any) => child.children.map((subChild: any) => subChild.text).join(''))
      .join(''),
    participation: presenter.participation,
    bond: presenter.bond,
    pictureURL: presenter.pictureURL,
  }));
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
