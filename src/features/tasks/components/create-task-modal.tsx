'use client'

import ResponsiveModal from "@/components/ResponsiveModal";
import { useCreateTaskModal } from "../hooks/useCreateTaskModal";
import { CreateTaskFromWrapper } from "./create-task-from-wrapper";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen, close } = useCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <div><CreateTaskFromWrapper onCancel={close} /></div>
    </ResponsiveModal>
  );
};
