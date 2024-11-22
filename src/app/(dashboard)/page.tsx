import { UserButton } from "@/features/auth/components/user-button";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getWorkspaces } from "@/features/workspaces/queries";

export default async function Home() {
  const user = await getCurrent();
  if (!user) { console.log("User Not found"); redirect("/sign-in") };

  const workspaces = await getWorkspaces();
  if (workspaces.total === 0) redirect("/workspaces/create");
  else redirect(`/workspaces/${workspaces.documents[0].$id}`);
}
