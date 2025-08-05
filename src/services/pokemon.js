export const fetchPokemonList = async (url) => {
  const response = await fetch(
    url || "https://pokeapi.co/api/v2/pokemon?limit=6"
  );
  if (!response.ok) throw new Error("Failed to fetch Pokemon list");
  return response.json();
};

export const fetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch Pokemon details");
  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types,
    stats: {
      hp: data.stats.find((stat) => stat.stat.name === "hp")?.base_stat || 0,
      attack:
        data.stats.find((stat) => stat.stat.name === "attack")?.base_stat || 0,
      defense:
        data.stats.find((stat) => stat.stat.name === "defense")?.base_stat || 0,
    },
  };
};
