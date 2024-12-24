import { createAdminClient } from "@/lib/appwrite";

export const getCurrent = async () => {
  try {
    const { account } = await createAdminClient();

    return await account.get();
  } catch {
    return null;
  }
};
