-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "phone" TEXT,
    "addres" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("addres", "city", "cnpj", "createdAt", "email", "id", "name", "password", "phone", "role", "state", "updatedAt", "zipCode") SELECT "addres", "city", "cnpj", "createdAt", "email", "id", "name", "password", "phone", "role", "state", "updatedAt", "zipCode" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_cnpj_key" ON "User"("cnpj");
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
