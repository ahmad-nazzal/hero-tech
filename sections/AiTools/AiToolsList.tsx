/*
  Refactored the Infinite Scroll feature in the AI Tools page: 
- Applied the Single Responsibility Principle (SRP) by dividing the code into smaller, reusable components. 
- Created a dedicated API utility for fetching data. 
- Added a separate component to handle rendering individual tool items. 
- Improved the Infinite Scroll logic for better performance and readability.

*/

"use client";

import React, { Suspense } from "react";
import { Box, Flex } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import { AiToolsCardProps } from "./types";
import { useAiTools } from "../../hooks/useAiTools";
import { useFavorites } from "../../hooks/useFavorites";
import { useUrlSearch } from "../../hooks/useUrlSearch";
import { LoadingMessage } from "./LoadingMessage";
import { ToolsHeader } from "./ToolsHeader";
import { NoToolsMessage } from "./NoToolsMessage";
import { ToolsGridLayout } from "./ToolsGridLayout";

export default function AiToolsList({
  initialAiTools,
}: {
  initialAiTools: AiToolsCardProps[];
}): JSX.Element {
  const { aiTools, error, isLoading, loadMore, hasMore, isValidating } =
    useAiTools(initialAiTools);
  const {
    favorites,
    getFavoriteTools,
    toggleFavorite,
    isShowingFavorites,
    setIsShowingFavorites,
  } = useFavorites();
  const { searchQuery, updateSearchQuery } = useUrlSearch();

  const filteredTools: AiToolsCardProps[] = React.useMemo(() => {
    let filtered: AiToolsCardProps[] = [...aiTools];
    if (searchQuery) {
      filtered = filtered.filter((tool: AiToolsCardProps) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (isShowingFavorites) {
      filtered = getFavoriteTools(filtered);
    }

    return filtered;
  }, [searchQuery, aiTools, isShowingFavorites, getFavoriteTools]);

  if (error) {
    return (
      <Flex
        align="center"
        justify="center"
        height="100vh"
        fontWeight="700"
        fontSize="30px"
      >
        حدث خطأ في جلب البيانات
      </Flex>
    );
  }

  if (isLoading) {
    return <LoadingMessage />;
  }

  return (
    <Box mx="auto" pb={10} px={5} py={10}>
      <ToolsHeader
        searchQuery={searchQuery}
        onSearch={updateSearchQuery}
        isShowingFavorites={isShowingFavorites}
        onToggleFavorites={() => setIsShowingFavorites((prev) => !prev)}
      />

      {filteredTools.length === 0 ? (
        <NoToolsMessage isShowingFavorites={isShowingFavorites} />
      ) : (
        <Suspense fallback={<LoadingMessage />}>
          <InfiniteScroll
            dataLength={filteredTools.length}
            next={loadMore}
            hasMore={!isShowingFavorites && hasMore}
            loader={isValidating && <LoadingMessage />}
            scrollThreshold="90%"
          >
            <ToolsGridLayout
              tools={filteredTools}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </InfiniteScroll>
        </Suspense>
      )}
    </Box>
  );
}
