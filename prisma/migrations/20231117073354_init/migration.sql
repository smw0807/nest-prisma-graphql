-- CreateTable
CREATE TABLE `tb_user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `tb_user_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_board` (
    `board_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`board_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_user_board` (
    `userId` INTEGER NOT NULL,
    `boardId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `boardId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `boardId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserBoards` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserBoards_AB_unique`(`A`, `B`),
    INDEX `_UserBoards_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_user_board` ADD CONSTRAINT `tb_user_board_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tb_user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_user_board` ADD CONSTRAINT `tb_user_board_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `tb_board`(`board_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_comment` ADD CONSTRAINT `tb_comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tb_user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_comment` ADD CONSTRAINT `tb_comment_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `tb_board`(`board_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserBoards` ADD CONSTRAINT `_UserBoards_A_fkey` FOREIGN KEY (`A`) REFERENCES `tb_board`(`board_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserBoards` ADD CONSTRAINT `_UserBoards_B_fkey` FOREIGN KEY (`B`) REFERENCES `tb_user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
