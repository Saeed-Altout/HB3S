import { db } from "@/lib/db";

export const getSessions = async () => {
  try {
    return await db.sessions.findMany();
  } catch (error) {
    return [];
  }
};
