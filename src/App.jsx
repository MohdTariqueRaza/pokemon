import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonProvider, usePokemonContext } from "./context/PokemonContext";
import TabNavigation from "./components/layout/TabNavigation";
import DiscoveryPage from "./components/discovery/DiscoveryPage";
import CollectionPage from "./components/collection/CollectionPage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const queryClient = new QueryClient();

function AppContent() {
  const [activeTab, setActiveTab] = useState("discovery");
  const { collection } = usePokemonContext();

  return (
    <div className="min-h-screen bg-gray-50 bg-gradient-to-r from-[#5f7cf7]  to-[#7b5de3]">
      <header className="bg-white text-white py-6 px-4 flex flex-col items-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-extrabold text-center text-black">
            🔥Pokemon Collection App
          </h1>
          <p className="opacity-90 mt-1 text-center text-black py-2">
            Discover, collect, and organize your favorite Pokemon!
          </p>
        </div>

        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          collectionCount={collection.length}
        />
      </header>

      <main className="max-w-6xl mx-auto py-6 px-4">
        {activeTab === "discovery" ? <DiscoveryPage /> : <CollectionPage />}
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DndProvider backend={HTML5Backend}>
        <PokemonProvider>
          <AppContent />
        </PokemonProvider>
      </DndProvider>
    </QueryClientProvider>
  );
}

export default App;
