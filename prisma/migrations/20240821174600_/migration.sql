-- CreateEnum
CREATE TYPE "event_types" AS ENUM ('Palestra', 'Minicurso', 'Competicao', 'Processo Seletivo', 'Visita Tecnica', 'Show de Talentos');

-- CreateEnum
CREATE TYPE "sponsor_tier_types" AS ENUM ('Bronze', 'Prata', 'Ouro', 'Platina', 'Diamante');

-- CreateTable
CREATE TABLE "prize" (
    "id" SERIAL NOT NULL,
    "prize" TEXT NOT NULL,
    "position" TEXT,
    "event_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "presenter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "bond" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "presenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "event_type" "event_types" NOT NULL,
    "schedule" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faq" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sponsor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "sponsor_tier" "sponsor_tier_types" NOT NULL,
    "image_url" TEXT,
    "contact_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sponsor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToPresenter" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "prize_prize_event_id_key" ON "prize"("prize", "event_id");

-- CreateIndex
CREATE UNIQUE INDEX "presenter_name_bond_key" ON "presenter"("name", "bond");

-- CreateIndex
CREATE UNIQUE INDEX "event_title_key" ON "event"("title");

-- CreateIndex
CREATE UNIQUE INDEX "faq_question_answer_key" ON "faq"("question", "answer");

-- CreateIndex
CREATE UNIQUE INDEX "sponsor_name_key" ON "sponsor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToPresenter_AB_unique" ON "_EventToPresenter"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToPresenter_B_index" ON "_EventToPresenter"("B");

-- AddForeignKey
ALTER TABLE "prize" ADD CONSTRAINT "prize_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPresenter" ADD CONSTRAINT "_EventToPresenter_A_fkey" FOREIGN KEY ("A") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPresenter" ADD CONSTRAINT "_EventToPresenter_B_fkey" FOREIGN KEY ("B") REFERENCES "presenter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
