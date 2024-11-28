'use client'

import ResponsiveModal from "@/components/ResponsiveModal";
import { CreateProjectForm } from "./create-project-form";
import { useCreateProjectModal } from "../hooks/useCreateProjectModal";

export const CreateProjectModal = () => {
  const { isOpen, close, setIsOpen } = useCreateProjectModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResponsiveModal>
  );
};
 