'use client'

import { useGetProject } from "@/features/projects/api/use-get-project";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { useProjectId } from "@/features/projects/hooks/useProjectId"
import { PageError } from "@/components/PageError";
import { PageLoader } from "@/components/PageLoader";

export const ProjectIdSettingsClient = () => {
  const projectId = useProjectId();
  const { data: initialValues, isLoading } = useGetProject({ projectId });

  if (isLoading) return <PageLoader />

  if (!initialValues) return <PageError message="Project not found" />;

  return (
    <div className="w-full lg:max-w-xl">
        <EditProjectForm initialValues={initialValues} />
    </div>
  )
}