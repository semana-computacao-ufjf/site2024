-- AlterTable
ALTER TABLE "event" ADD COLUMN     "end_time" TIMESTAMP(3),
ALTER COLUMN "schedule" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL;
