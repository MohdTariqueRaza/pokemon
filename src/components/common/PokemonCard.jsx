import TypeBadge from "./TypeBadge";

const PokemonCard = ({ pokemon, isInCollection, onAdd, onRemove }) => {
  return (
    <div className="overflow-hidden relative bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-500" />

      {/* Add/Remove Button */}
      {isInCollection ? (
        <button
          onClick={() => onRemove(pokemon)}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shadow p-4 cursor-pointer"
          aria-label="Remove from collection"
        >
          <span className="text-xl">&times;</span>
        </button>
      ) : (
        <button
          onClick={() => onAdd(pokemon)}
          className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shadow p-4 cursor-pointer"
          aria-label="Add to collection"
        >
          <span className="text-xl">&#43;</span>
        </button>
      )}

      {/* Pokemon Image with gradient circle */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center mb-3 shadow-inner">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Pokemon Name */}
      <h3 className="text-xl font-extrabold capitalize text-center mb-2">
        {pokemon.name}
      </h3>

      {/* Types */}
      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {pokemon.types?.map((type) => (
          <TypeBadge key={type.slot} type={type.type.name} />
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 w-full text-center text-sm">
        <div>
          <p className="text-blue-600 font-bold">{pokemon.stats?.hp}</p>
          <p className="text-gray-500 text-xs">HP</p>
        </div>
        <div>
          <p className="text-blue-600 font-bold">{pokemon.stats?.attack}</p>
          <p className="text-gray-500 text-xs">Attack</p>
        </div>
        <div>
          <p className="text-blue-600 font-bold">{pokemon.stats?.defense}</p>
          <p className="text-gray-500 text-xs">Defense</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
