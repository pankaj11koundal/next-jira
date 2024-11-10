import { InferResponseType, InferRequestType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.auth.register)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.auth.register)["$post"]>;

export const useRegister = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error, RequestType>({
      mutationFn: async ({ json }) => {
        const resposne = await client.api.auth.register["$post"]({ json });
        return await resposne.json();
      },

      onSuccess: () => {
        router.refresh();
        queryClient.invalidateQueries({ queryKey: ["current"] });
      },
    });

    return mutation;
};
