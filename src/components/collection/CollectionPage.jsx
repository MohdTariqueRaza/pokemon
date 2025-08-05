// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { usePokemonContext } from "../../context/PokemonContext";
import DraggablePokemonCard from "./DraggablePokemonCard";
import { useEffect } from "react";

const CollectionPage = () => {
  const { collection, movePokemon } = usePokemonContext();

  useEffect(() => {
    document.title = "My Collection";
    return () => {
      document.title = "Discover Pokemon";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">
          My Pokemon Collection
        </h1>

        {collection.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-5xl mb-4">😢</div>
            <p className="text-gray-600 mb-2">Your collection is empty</p>
            <p className="text-gray-500">Add Pokemon from the Discovery page</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {collection.map((pokemon, index) => (
              <DraggablePokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                index={index}
                movePokemon={movePokemon}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CollectionPage;
