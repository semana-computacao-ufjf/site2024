"use client";

import { useState } from "react";
import { StudentOrganization } from "@prisma/client";
import Image from "next/image";
import StudentOrganizationModal from "./studentOrganizationModal";

export default function StudentOrganizationModel({
  organization,
}: {
  organization: StudentOrganization;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <Image
          width={350}
          height={350}
          src={organization.imageUrl ?? ""}
          alt={organization.name}
          title={organization.name}
          className="rounded-full object-cover sm:max-h-[150px] sm:max-w-[150px] max-w-[75px] max-h-[75px]"
        />
      </div>

      <StudentOrganizationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        organization={organization}
      />
    </>
  );
}
