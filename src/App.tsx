import { Navigate, Route, Routes } from "react-router-dom";
import { CharactersPage } from "./pages/CharacterPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";
import { LocationDetailPage } from "./pages/LocationDetailPage";
import { LocationsPage } from "./pages/LocationPage";
import {Navbar} from "@/components/navigation/Nav";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/characters" replace />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterDetailPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/location/:id" element={<LocationDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
