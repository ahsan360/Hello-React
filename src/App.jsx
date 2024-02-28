import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import { useContext, useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import { Link, Route, Routes } from "react-router-dom";
import { HashRouter as BrowserRouter } from "react-router-dom";

import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adopetedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adopetedPet}>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
