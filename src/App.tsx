import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Surah from "@pages/Surah";
import Juz from "@pages/Juz";
import SurahInfo from "@pages/SurahInfo";

function App() {
  const theme = useSelector((state: RootState) => state.settingsReducer.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/surah/:id" element={<Surah />} />
      <Route path="/juz/:id" element={<Juz />} />
      <Route path="/surahinfo/:id" element={<SurahInfo />} />
      <Route errorElement path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
