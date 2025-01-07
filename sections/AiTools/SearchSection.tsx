import { Box } from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import { useTheme } from "../../hooks/useTheme";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  onSearch,
  searchQuery,
}) => {
  const { color } = useTheme();

  return (
    <Box mt="-30px" flexGrow={1} mb={{ base: 4, lg: 0 }} order={{ lg: 2 }}>
      <SearchBar
        sx={{ color: color }} 
        placeholder="ابحث"
        onSearch={onSearch}
        searchQuery={searchQuery}
      />
    </Box>
  );
};
