import { Home } from "../components/home";
import { prisma } from "@/util/prisma";

// next was statically generating the main page which meant the database queries
// were only happening once during compile time which is not what we want
export const dynamic = "force-dynamic";

const App = async () => {
  const sponsors = await prisma.sponsor.findMany();
  const studentOrganizations = await prisma.studentOrganization.findMany();
  const events = await prisma.event.findMany({
    include: {
      presenters: true,
      prizes: true,
    },
    orderBy: [
      {
        schedule: "asc",
      },
      {
        eventType: "asc",
      },
    ],
  });
  const presenters = await prisma.presenter.findMany({
    include: {
      events: true,
    },
    orderBy: {
      name: "asc",
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
