import { validateRequest } from "@/util/lucia";
import { AdminClient } from "./client";
import { redirect } from "next/navigation";

const Page = async () => {
  const { user } = await validateRequest();
  if (user !== null) redirect("/admin/dashboard");

  return (
    <div>
      <AdminClient />
    </div>
  );
};

export default Page;
