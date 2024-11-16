import { UserButton } from "@/features/auth/components/user-button";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return (
    <div>
      <CreateWorkspaceForm />
    </div>
  );
}
