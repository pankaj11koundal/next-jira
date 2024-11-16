import { InferResponseType, InferRequestType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.workspaces)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.workspaces)["$post"]>;

export const useCreateWorkspace = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      const response = await client.api.workspaces["$post"]({ form });
      if (!response.ok) throw new Error("Workspace creation failed");
      return await response.json();
    },

    onSuccess: () => {
      toast.success("Workspace created successfully");
      router.refresh();
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    },

    onError: () => {
      toast.error("Workspace creation failed");
    },
  });

  return mutation;
};
