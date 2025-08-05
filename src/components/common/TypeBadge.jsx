const TypeBadge = ({ type }) => {
  return (
    <span
      className={`type-${type} text-white text-xs font-bold px-2 py-1 rounded mr-1 capitalize`}
    >
      {type}
    </span>
  );
};

export default TypeBadge;
