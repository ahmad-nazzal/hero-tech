"use client";
import React, { Suspense } from "react";
import { Box, Flex } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AiToolsCardProps } from "./types";
import { useFavorites } from "../../hooks/useFavorites";
import { useUrlSearch } from "../../hooks/useUrlSearch";
import { LoadingMessage } from "./LoadingMessage";
import { ToolsHeader } from "./ToolsHeader";
import { NoToolsMessage } from "./NoToolsMessage";
import { ToolsGridLayout } from "./ToolsGridLayout";
import { useAiTools } from "../../hooks/useAiTools";
import { useTheme } from "../../hooks/useTheme";

export default function AiToolsList({
  initialAiTools,
}: {
  initialAiTools: AiToolsCardProps[];
}): JSX.Element {
  const { aiTools, error, isLoading, loadMore, hasMore, isValidating } =
    useAiTools(initialAiTools);

  const {
    favorites,
    toggleFavorite,
    isShowingFavorites,
    setIsShowingFavorites,
    getFavoriteTools,
  } = useFavorites();
  const { color } = useTheme();

  const { searchQuery, updateSearchQuery } = useUrlSearch();

  const displayedTools = isShowingFavorites
    ? getFavoriteTools(aiTools)
    : aiTools;

  if (error) {
    console.error("Error loading tools:", error);
    return (
      <Flex
        align="center"
        justify="center"
        height="100vh"
        fontWeight="700"
        fontSize="30px"
        color={color}
      >
        حدث خطأ في جلب البيانات
      </Flex>
    );
  }

  if (isLoading) {
    return <LoadingMessage />;
  }

  const showNoFavoritesMessage =
    isShowingFavorites && displayedTools.length === 0;
  const showNoToolsMessage = !isShowingFavorites && aiTools.length === 0;

  return (
    <Box mx="auto" pb={10} px={5} py={10}>
      <ToolsHeader
        searchQuery={searchQuery}
        onSearch={updateSearchQuery}
        isShowingFavorites={isShowingFavorites}
        onToggleFavorites={() => {
          setIsShowingFavorites((prev) => !prev);
        }}
      />

      {showNoFavoritesMessage || showNoToolsMessage ? (
        <Flex align="center" justify="center" height="50vh">
          <Box textAlign="center">
            <NoToolsMessage isShowingFavorites={isShowingFavorites} />
          </Box>
        </Flex>
      ) : (
        <Suspense fallback={<LoadingMessage />}>
          <InfiniteScroll
            dataLength={displayedTools.length}
            next={loadMore}
            hasMore={!isShowingFavorites && hasMore}
            loader={isValidating && <LoadingMessage />}
            scrollThreshold="70%"
          >
            <ToolsGridLayout
              tools={displayedTools}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </InfiniteScroll>
        </Suspense>
      )}
    </Box>
  );
}
