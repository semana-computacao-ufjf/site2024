import { prisma } from "@/util/prisma";
import { SignoutButton } from "./signoutButton";
import { Table } from "./table";

const DashboardPage = async () => {
  const events = await prisma.event.findMany({
    include: {
      presenters: {
        select: {
          id: true,
        },
      },
      prizes: {
        select: {
          id: true,
        },
      },
    },
  });
  const faqs = await prisma.faq.findMany();
  const presenters = await prisma.presenter.findMany({
    include: {
      events: true,
    },
  });
  const prizes = await prisma.prize.findMany({});
  const sponsors = await prisma.sponsor.findMany();

  return (
    <div>
      <SignoutButton />
      <Table
        tableName="event"
        columnNames={[
          "id",
          "title",
          "description",
          "eventType",
          "location",
          "schedule",
          "createdAt",
        ]}
        connectionNames={["presenters", "prizes"]}
        columnValues={events}
      />
      <Table
        tableName="faq"
        columnNames={["id", "question", "answer", "createdAt"]}
        connectionNames={[]}
        columnValues={faqs}
      />
      <Table
        tableName="presenter"
        columnNames={[
          "id",
          "name",
          "description",
          "imageUrl",
          "bond",
          "createdAt",
        ]}
        connectionNames={["events"]}
        columnValues={presenters}
      />
      <Table
        tableName="prize"
        columnNames={["id", "prize", "position", "createdAt", "eventId"]}
        connectionNames={[]}
        columnValues={prizes}
      />
      <Table
        tableName="sponsors"
        columnNames={[
          "id",
          "name",
          "description",
          "sponsorTier",
          "imageUrl",
          "contactUrl",
          "createdAt",
        ]}
        connectionNames={[]}
        columnValues={sponsors}
      />
    </div>
  );
};

export default DashboardPage;
