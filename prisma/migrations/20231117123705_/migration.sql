/*
  Warnings:

  - You are about to drop the column `username` on the `tb_user` table. All the data in the column will be lost.
  - Added the required column `user_name` to the `tb_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_user` DROP COLUMN `username`,
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL;
