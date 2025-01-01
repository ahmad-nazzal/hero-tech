import { Box } from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  onSearch,
  searchQuery,
}) => (
  <Box mt="-30px" flexGrow={1} mb={{ base: 4, lg: 0 }} order={{ lg: 2 }}>
    <SearchBar
      placeholder="ابحث"
      onSearch={onSearch}
      searchQuery={searchQuery}
    />
  </Box>
);
