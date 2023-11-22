-- CreateTable
CREATE TABLE `tb_inquiry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `type_id` INTEGER NULL,
    `additional_type_id` INTEGER NULL,
    `parent_inquiry_id` INTEGER NULL,
    `title` VARCHAR(191) NULL,
    `content` LONGTEXT NULL,
    `is_show` BOOLEAN NOT NULL DEFAULT true,
    `reg_dtime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `upd_dtime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `create_by` VARCHAR(191) NULL,

    UNIQUE INDEX `tb_inquiry_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_inquiry_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `create_by` VARCHAR(191) NULL,
    `update_by` VARCHAR(191) NULL,
    `parent_inquiry_type_id` INTEGER NULL,
    `reg_dtime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `upd_dtime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `tb_inquiry_type_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ParentInquiry` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ParentInquiry_AB_unique`(`A`, `B`),
    INDEX `_ParentInquiry_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ParentInquiryType` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ParentInquiryType_AB_unique`(`A`, `B`),
    INDEX `_ParentInquiryType_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_inquiry` ADD CONSTRAINT `tb_inquiry_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `tb_inquiry_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_inquiry` ADD CONSTRAINT `tb_inquiry_additional_type_id_fkey` FOREIGN KEY (`additional_type_id`) REFERENCES `tb_inquiry_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParentInquiry` ADD CONSTRAINT `_ParentInquiry_A_fkey` FOREIGN KEY (`A`) REFERENCES `tb_inquiry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParentInquiry` ADD CONSTRAINT `_ParentInquiry_B_fkey` FOREIGN KEY (`B`) REFERENCES `tb_inquiry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParentInquiryType` ADD CONSTRAINT `_ParentInquiryType_A_fkey` FOREIGN KEY (`A`) REFERENCES `tb_inquiry_type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParentInquiryType` ADD CONSTRAINT `_ParentInquiryType_B_fkey` FOREIGN KEY (`B`) REFERENCES `tb_inquiry_type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
