import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // @ts-expect-error these are all caused because global is untyped and won't be an issue on a production build
  if (!global.prisma) {
    // @ts-expect-error these are all caused because global is untyped and won't be an issue on a production build
    global.prisma = new PrismaClient();
  }
  // @ts-expect-error these are all caused because global is untyped and won't be an issue on a production build
  prisma = global.prisma;
}

export { prisma };
