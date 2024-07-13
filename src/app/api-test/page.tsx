import { getSponsorById } from "@/api/fetch/sponsor.fetch";

export default async function Page() {
  const sponsor = await getSponsorById("clyjgcrca0uj807luth00febc");

  console.log(sponsor);

  // exibir os eventos em tela
  return <div>{sponsor.image.url}</div>;
}
