export type Presenter = {
  id: string;
  name: string;
  description?: {
    raw: string;
  };
  events: Event[];
  bond?: string;
};
