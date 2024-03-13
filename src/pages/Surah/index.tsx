import { SurahType, Verse } from "@src/types/surah";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import Header from "@src/components/Header";

function Surah() {
  const params = useParams();
  const [surah, setSurah] = useState<SurahType>();

  async function getSurah() {
    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${params.id}`,
      );
      setSurah(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSurah();
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="surah">
          <div className="surah-container container">
            {surah?.meta.filters.chapter_number}
            <p className="surah-surah">
              {surah?.verses.map((verse: Verse, id) => {
                return (
                  <span key={id}>
                    <span className="surah-verse">{verse.text_uthmani}</span>
                    <small className="surah-verseNumber">{++id}</small>
                  </span>
                );
              })}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Surah;
