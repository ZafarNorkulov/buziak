import { CLIENT_API } from "@/service/clients.request";
import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

const useGetData = <T = any>({
  queryKey,
  url,
  options,
  urlParams,
}: {
  queryKey: Array<string | number | undefined>;
  url: string;
  options?: UseQueryOptions<T>;
  urlParams?: Record<string | number, any>;
}) => {
  const queryClient = useQueryClient();

  const response = useQuery<T>({
    queryKey,
    queryFn: () => CLIENT_API.getAll({ url, _params: urlParams }),
    ...options,
  });

  if (!response.data && !response.isLoading && !response.error) {
    queryClient.prefetchQuery({
      queryKey,
      queryFn: () => CLIENT_API.getAll({ url, _params: urlParams }),
    });
  }

  return { ...response };
};

export default useGetData;
