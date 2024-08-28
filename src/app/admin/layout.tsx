import { ReactNode } from "react";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-10 w-full h-full bg-white font-sans overflow-scroll">
      {children}
    </div>
  );
};

export default AdminLayout;
