import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList, fetchPokemonDetails } from "../services/pokemon";

export const useInfinitePokemon = () => {
  return useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: async ({ pageParam }) => {
      try {
        const listData = await fetchPokemonList(pageParam);

        // Fetch details for each Pokemon in the page
        const detailedPokemon = await Promise.all(
          listData.results.map((pokemon) => fetchPokemonDetails(pokemon.url))
        );

        return {
          ...listData,
          results: detailedPokemon,
        };
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        throw error;
      }
    },
    getNextPageParam: (lastPage) => lastPage.next || undefined,
    initialPageParam: "https://pokeapi.co/api/v2/pokemon?limit=6",
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000, // 1 minute
  });
};
