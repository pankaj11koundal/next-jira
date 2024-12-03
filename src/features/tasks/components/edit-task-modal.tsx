'use client'

import ResponsiveModal from "@/components/ResponsiveModal";
import { useEditTaskModal } from "../hooks/useEditTaskModal";
import { EditTaskFromWrapper } from "./edit-task-from-wrapper";

export const EditTaskModal = () => {
  const { taskId, setTaskId, close } = useEditTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && <div><EditTaskFromWrapper id={taskId} onCancel={close} /></div>}
    </ResponsiveModal>
  );
};
