/*
  Warnings:

  - A unique constraint covering the columns `[name,time]` on the table `classes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "classes_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "classes_name_time_key" ON "classes"("name", "time");
