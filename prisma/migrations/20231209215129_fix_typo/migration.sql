/*
  Warnings:

  - You are about to drop the column `sellerId` on the `items` table. All the data in the column will be lost.
  - Added the required column `seller_id` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_sellerId_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "sellerId",
ADD COLUMN     "seller_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
