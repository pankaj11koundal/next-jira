"use client";

import { PageError } from "@/components/PageError";
import { PageLoader } from "@/components/PageLoader";
import { useGetTask } from "@/features/tasks/api/use-get-task";
import { TaskBreadcrumbs } from "@/features/tasks/components/task-breadcrumbs";
import { useTaskId } from "@/features/tasks/hooks/useTaskId";

const TaskIdClient = () => {
  const taskId = useTaskId();
  const { data, isLoading } = useGetTask({ taskId });

  if (isLoading) return <PageLoader />;

  if (!data) return <PageError message="Task not found" />

  return (
    <div className="flex flex-col">
        <TaskBreadcrumbs project={data.project} task={data}/>
    </div>
  )
};

export default TaskIdClient;
