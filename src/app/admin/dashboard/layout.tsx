import { validateRequest } from "@/util/lucia";
import { redirect } from "next/navigation";
import { SignoutButton } from "./signoutButton";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await validateRequest();

  if (user === null) {
    redirect("/admin");
    return <div />;
  }

  if (!user.active) {
    return (
      <div>
        <SignoutButton />
        <div>Esse usuário ainda não foi habilitado</div>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default DashboardLayout;
