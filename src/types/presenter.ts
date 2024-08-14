import { Event } from "./event";

export type Presenter = {
  id: string;
  name: string;
  description?: {
    text?: string;
  };
  bond?: string;
  image?: {
    url: string;
  };
  events: Event[];
};
