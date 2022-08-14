/*
  Warnings:

  - A unique constraint covering the columns `[classId,disciplineId,date]` on the table `lessons` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "lessons_classId_disciplineId_date_key" ON "lessons"("classId", "disciplineId", "date");
