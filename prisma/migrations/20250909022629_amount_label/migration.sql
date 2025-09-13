/*
  Warnings:

  - Added the required column `amount` to the `Labels` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Labels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "manufacture_Date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "experation_Date" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Labels_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Labels_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Labels" ("createdAt", "experation_Date", "id", "manufacture_Date", "productId", "status", "userId") SELECT "createdAt", "experation_Date", "id", "manufacture_Date", "productId", "status", "userId" FROM "Labels";
DROP TABLE "Labels";
ALTER TABLE "new_Labels" RENAME TO "Labels";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
