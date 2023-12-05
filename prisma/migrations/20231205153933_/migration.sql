/*
  Warnings:

  - You are about to drop the `tb_test_post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_test_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_test_post` DROP FOREIGN KEY `tb_test_post_authorId_fkey`;

-- DropTable
DROP TABLE `tb_test_post`;

-- DropTable
DROP TABLE `tb_test_user`;

-- CreateTable
CREATE TABLE `tb_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `tb_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NULL,
    `published` BOOLEAN NULL DEFAULT false,
    `authorId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_post` ADD CONSTRAINT `tb_post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `tb_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
