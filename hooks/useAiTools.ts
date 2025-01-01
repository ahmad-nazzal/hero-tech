import useSWRInfinite from "swr/infinite";
import { AiToolsCardProps } from "../sections/AiTools/types";
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("فشل في جلب البيانات");
  }
  const data = await res.json();

  return data?.data || [];
};

export const useAiTools = (initialAiTools: AiToolsCardProps[]) => {
  const getKey = (pageIndex: number, previousPageData: unknown[]) => {
    // إذا لم تكن هناك صفحات أخرى، أوقف الطلب
    if (previousPageData && previousPageData.length === 0) return null;
    return `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${
      pageIndex + 1
    }`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      fallbackData: [initialAiTools],
    }
  );

  const aiTools = data ? [].concat(...data) : [];

  const hasMore = data?.[data.length - 1]?.length > 0;

  return {
    aiTools,
    error,
    isLoading: !error && !data,
    loadMore: () => setSize(size + 1),
    hasMore,
    isValidating,
  };
};
