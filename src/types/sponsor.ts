export type Sponsor = {
  id: string;
  name: string;
  image: {
    url: string;
  };
  description?: {
    raw: string;
  };
  contact_url?: string;
};
