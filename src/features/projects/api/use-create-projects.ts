import { InferResponseType, InferRequestType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.projects)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.projects)["$post"]>;

export const useCreateProject = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      const response = await client.api.projects["$post"]({ form });
      if (!response.ok) throw new Error("Failed to create Project");
      return await response.json();
    },

    onSuccess: () => {
      toast.success("Project created successfully");
      router.refresh();
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },

    onError: () => {
      toast.error("Failed to create Project");
    },
  });

  return mutation;
};
