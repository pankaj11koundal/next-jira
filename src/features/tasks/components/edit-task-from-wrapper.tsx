"use client";

import { Loader } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useGetMembers } from "@/features/members/api/use-get-workspaces";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/useWorkspaceId";
import { EditTaskForm } from "./edit-task-form";
import { useGetTask } from "../api/use-get-task";

interface EditTaskFromWrapperProps {
  id: string,
  onCancel: () => void;
}

export const EditTaskFromWrapper = ({
  onCancel,
  id
}: EditTaskFromWrapperProps) => {
  const workspaceId = useWorkspaceId();

  const { data: initialValues, isLoading: isLoadingTask } = useGetTask({
    taskId: id,
  })
  const { data: projects, isLoading: isLoadingProjects } = useGetProjects({
    workspaceId,
  });
  const { data: members, isLoading: isLoadingMembers } = useGetMembers({
    workspaceId,
  });

  const projectOptions = projects?.documents.map((project) => ({
    id: project.$id,
    name: project.name,
    imageUrl: project.imageUrl,
  }));

  const memberOptions = members?.documents.map((member) => ({
    id: member.$id,
    name: member.name,
  }));

  const isLoading = isLoadingMembers || isLoadingProjects || isLoadingTask;

  if (isLoading) {
    return (
      <Card className="w-full h-[714px] border-none shadow-none">
        <CardContent className="flex items-center justify-center h-full">
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if (!initialValues) return null;

  return (
    <div>
        <EditTaskForm
          onCancel={onCancel}
          projectOptions={projectOptions ?? []}
          memberOptions={memberOptions ?? []}
          initialValues={initialValues}
        />
    </div>
  )
};
