/*
  Warnings:

  - You are about to drop the `studentOrganization` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "studentOrganization";

-- CreateTable
CREATE TABLE "student_organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "contact_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "student_organization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_organization_name_key" ON "student_organization"("name");
