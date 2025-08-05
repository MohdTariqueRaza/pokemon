import React from "react";
import { useDrag, useDrop } from "react-dnd";
import TypeBadge from "../common/TypeBadge";
import { usePokemonContext } from "../../context/PokemonContext";
const DraggablePokemonCard = ({ pokemon, index, movePokemon }) => {
  const { removeFromCollection } = usePokemonContext();
  const ref = React.useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: "POKEMON",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "POKEMON",
    hover(item) {
      if (!ref.current) return;
      if (item.index === index) return;

      movePokemon(item.index, index);
      item.index = index;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`overflow-hidden relative bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-500" />
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
      <button
        onClick={() => removeFromCollection(pokemon.id)}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded transition-colors text-sm cursor-pointer mt-2"
      >
        Remove
      </button>
    </div>
  );
};

export default DraggablePokemonCard;
