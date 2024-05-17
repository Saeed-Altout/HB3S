import { db } from "@/lib/db";

export const getPatients = async () => {
  try {
    return await db.patients.findMany();
  } catch (error) {
    return [];
  }
};

export const getPatientById = async (id: string) => {
  try {
    return await db.patients.findFirst({
      where: {
        id,
      },
    });
  } catch (error) {
    return null;
  }
};
