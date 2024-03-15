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
    let storedSurah;
    if (surah) {
      storedSurah = localStorage.getItem(
        surah.meta.filters.chapter_number.toString(),
      );
    }
    if (storedSurah) {
      setSurah(JSON.parse(storedSurah));
    } else {
      try {
        const response = await axios.get(
          `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${params.id}`,
        );
        setSurah(response.data);
        if (surah) {
          localStorage.setItem(
            surah.meta.filters.chapter_number.toString(),
            JSON.stringify(response.data),
          );
        }
      } catch (error) {
        console.log(error);
      }
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
            <p className="surah-surah">
              {surah?.verses.map((verse: Verse, id) => {
                return (
                  <span className="surah-part" key={id}>
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
