// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import PokemonCard from "../common/PokemonCard";
import { useInfinitePokemon } from "../../hooks/useInfinitePokemon";
import { usePokemonContext } from "../../context/PokemonContext";
import Loader from "../common/Loader";

const MAX_POKEMON = 96;

const DiscoveryPage = () => {
  const { collection, addToCollection, removeFromCollection } =
    usePokemonContext();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    status,
    error,
  } = useInfinitePokemon();

  const allPokemon = data?.pages.flatMap((page) => page.results) || [];
  const displayedPokemon = allPokemon.slice(0, MAX_POKEMON);
  const hasMore = displayedPokemon.length < MAX_POKEMON && hasNextPage;

  const loaderRef = useRef(null);

  const loadMore = useCallback(() => {
    if (hasMore && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasMore, isFetching, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loadMore]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Pokemon Discovery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {status === "pending" &&
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-4 animate-pulse"
              >
                <div className="h-16 bg-gray-200 rounded-full w-16 mx-auto mb-3"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-3"></div>
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}

          {status === "error" && (
            <div className="col-span-full text-center py-8">
              <p className="text-red-500 mb-2">Error: {error.message}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {displayedPokemon.map((pokemon) => {
            const isInCollection = collection.some((p) => p.id === pokemon.id);
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                isInCollection={isInCollection}
                onAdd={addToCollection}
                onRemove={() => removeFromCollection(pokemon.id)}
              />
            );
          })}
        </div>

        {/* Intersection Observer Loader Target */}
        <div
          ref={loaderRef}
          className="h-16 flex justify-center items-center mt-4"
        >
          {hasMore && <Loader />}
          {!hasMore && !isFetchingNextPage && (
            <p className="text-white font-semibold">
              Yay! You have seen it all.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DiscoveryPage;
