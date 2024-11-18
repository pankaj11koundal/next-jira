import { getCurrent } from '@/features/auth/actions'
import { getWorkspace } from '@/features/workspaces/actions';
import { EditWorkspaceForm } from '@/features/workspaces/components/edit-workspace-form';
import { redirect } from 'next/navigation';
import React from 'react'

interface WorkspaceIdSettingsPageProps {
    params: {
        workspaceId: string,
    }
}

const WorkspaceIdSettingsPage = async ({ params }: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

  if (!initialValues) redirect(`/workspaces/${params.workspaceId}`);
   
  return (
    <EditWorkspaceForm initialValues={initialValues}/>
  )
}

export default WorkspaceIdSettingsPage