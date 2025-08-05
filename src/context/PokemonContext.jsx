import { createContext, useState, useEffect, useContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PokemonContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePokemonContext = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [collection, setCollection] = useState(() => {
    const saved = localStorage.getItem("pokemon-collection");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("pokemon-collection", JSON.stringify(collection));
  }, [collection]);

  const addToCollection = (pokemon) => {
    if (!collection.some((p) => p.id === pokemon.id)) {
      setCollection((prev) => [...prev, pokemon]);
    }
  };

  const removeFromCollection = (id) => {
    setCollection((prev) => prev.filter((p) => p.id !== id));
  };

  const movePokemon = (fromIndex, toIndex) => {
    const newCollection = [...collection];
    const [movedItem] = newCollection.splice(fromIndex, 1);
    newCollection.splice(toIndex, 0, movedItem);
    setCollection(newCollection);
  };

  return (
    <PokemonContext.Provider
      value={{
        collection,
        addToCollection,
        removeFromCollection,
        movePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
