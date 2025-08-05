const TabNavigation = ({ activeTab, setActiveTab, collectionCount }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      {/* Discover Pokemon Button */}
      {activeTab === "discovery" ? (
        <button
          className="px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md transition-all duration-300 cursor-pointer text-sm border-2 border-indigo-500"
          onClick={() => setActiveTab("discovery")}
        >
          🔍 Discover Pokemon
        </button>
      ) : (
        <div className="p-[2px] rounded-full">
          <button
            className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 cursor-pointer text-sm"
            onClick={() => setActiveTab("discovery")}
          >
            <div className="flex items-center justify-center w-full h-full px-4 py-2 bg-white rounded-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold">
                🔍 Discover Pokemon
              </span>
            </div>
          </button>
        </div>
      )}

      {/* My Collection Button */}
      {activeTab === "collection" ? (
        <button
          className="px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md transition-all duration-300 cursor-pointer text-sm border-2 border-indigo-500"
          onClick={() => setActiveTab("collection")}
        >
          📦 My Collection ({collectionCount > 0 && collectionCount})
        </button>
      ) : (
        <div className="p-[2px] rounded-full">
          <button
            className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 cursor-pointer text-sm"
            onClick={() => setActiveTab("collection")}
          >
            <div className="flex items-center justify-center w-full h-full px-4 py-2 bg-white rounded-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold">
                📦 My Collection ({collectionCount > 0 && collectionCount})
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default TabNavigation;
