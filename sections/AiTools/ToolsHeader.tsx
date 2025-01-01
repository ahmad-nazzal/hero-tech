import React from "react";
import { Flex } from "@chakra-ui/react";
import { SearchSection } from "./SearchSection";
import { FavoritesButton } from "./FavoritesButton";

interface ToolsHeaderProps {
  onSearch: (query: string) => void;
  isShowingFavorites: boolean;
  onToggleFavorites: () => void;
  searchQuery: string;
}

export const ToolsHeader: React.FC<ToolsHeaderProps> = ({
  onSearch,
  isShowingFavorites,
  onToggleFavorites,
  searchQuery,
}) => (
  <Flex
    direction={{ base: "column", md: "column", lg: "row" }}
    align={{ base: "center", md: "center", lg: "flex-end" }}
    wrap="nowrap"
    mt={{ lg: "0px", md: "80px", sm: "80px", base: "40px" }}
    mb={{ lg: "30px" }}
    justifyContent={{ lg: "space-between" }}
  >
    <SearchSection onSearch={onSearch} searchQuery={searchQuery} />
    <FavoritesButton
      isShowingFavorites={isShowingFavorites}
      onClick={onToggleFavorites}
    />
  </Flex>
);
