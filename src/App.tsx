import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { Route, Routes } from "react-router-dom";
import SurahInfo from "./pages/SurahInfo";
import Surah from "./pages/Surah";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/surah/:id" element={<Surah />} />
      <Route path="/surah/:id/info" element={<SurahInfo />} />
      <Route errorElement path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
