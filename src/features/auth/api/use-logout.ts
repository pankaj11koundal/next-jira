import { InferResponseType, InferRequestType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const router = useRouter()
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const resposne = await client.api.auth.logout["$post"]();
      return await resposne.json();
    },
    onSuccess: () => {
        router.refresh();
        queryClient.invalidateQueries({ queryKey: ["current"] })
    }
  });

  return mutation;
};
