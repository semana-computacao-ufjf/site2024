import { Home } from "../components/home";
import { prisma } from "@/util/prisma";

const App = async () => {
  const sponsors = await prisma.sponsor.findMany();
  const studentOrganizations = await prisma.studentOrganization.findMany();
  const events = await prisma.event.findMany({
    include: {
      presenters: true,
      prizes: true,
    },
  });
  const presenters = await prisma.presenter.findMany({
    include: {
      events: true,
    },
  });
  const faqs = await prisma.faq.findMany();

  return (
    <Home
      sponsors={sponsors}
      studentOrganizations={studentOrganizations}
      events={events}
      presenters={presenters}
      faqs={faqs}
    />
  );
};

export default App;
