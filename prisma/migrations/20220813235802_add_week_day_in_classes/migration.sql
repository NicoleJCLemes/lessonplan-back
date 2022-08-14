/*
  Warnings:

  - A unique constraint covering the columns `[time,weekDay]` on the table `classes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `weekDay` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "classes_name_time_key";

-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "weekDay" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "classes_time_weekDay_key" ON "classes"("time", "weekDay");
