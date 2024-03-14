import { SurahType, Verse } from "@src/types/surah";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
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

  const currentChapterNumber = surah?.meta.filters.chapter_number || 1;
  const previousChapterNumber = +currentChapterNumber - 1;
  const nextChapterNumber = +currentChapterNumber + 1;
  return (
    <>
      <Header />
      <main>
        <section className="surah">
          <div className="surah-container container">
            {surah?.meta.filters.chapter_number}
            {surah?.verses[0].verse_key}
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
            <div className="surah-buttons">
              <NavLink
                className="surah-previousButton surah-button"
                to={"/surah/" + previousChapterNumber}
              >
                previous
              </NavLink>
              <button
                className="surah-beginningButton surah-button"
                type="button"
              ></button>
              <NavLink
                className="surah-nextButton surah-button"
                to={"/surah/" + nextChapterNumber}
              >
                Next
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Surah;
