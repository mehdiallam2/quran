import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Chapter } from "@src/types/chapter";
import SurahCard from "../SurahCard";

function SurahGrid() {
  const [surahs, setSurahs] = useState<Chapter[]>([]);

  async function getSurahs() {
    try {
      const response = await axios.get("https://api.quran.com/api/v4/chapters");
      setSurahs(response.data.chapters);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSurahs();
  });

  return (
    <section className="surahGrid">
      <div className="surahGrid-container container">
        {surahs.map((surah: Chapter, id) => (
          <SurahCard surah={surah} key={id} />
        ))}
      </div>
    </section>
  );
}

export default SurahGrid;
