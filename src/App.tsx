import { Navigate, Route, Routes } from "react-router-dom"
import { CharactersPage } from "./pages/CharacterPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/characters" replace />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharactersPage />} />
    </Routes>
    </>
  )
}

export default App
