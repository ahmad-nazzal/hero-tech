/*
The query paramter task is done from the previous task 
we fix the issue of the search query not updating in the search field when the user copy and paste the url with query parameters.

*/
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const useUrlSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = searchParams?.get("query") || "";
    setSearchQuery(query);
  }, [searchParams]);

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);

    // Update URL
    const newParams = new URLSearchParams(searchParams?.toString());
    if (query) {
      newParams.set("query", query);
    } else {
      newParams.delete("query");
    }

    router.push(`?${newParams.toString()}`);
  };

  return {
    searchQuery,
    updateSearchQuery,
  };
};
