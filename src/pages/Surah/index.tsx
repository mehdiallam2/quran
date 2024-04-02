import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useEffect, useState } from "react";
import { SurahType } from "types/surah";
import axios from "axios";

function Surah() {
  const params = useParams();

  const [surah, setSurah] = useState<SurahType | null>(null);

  async function getSurah() {
    try {
      const response = await axios.get(
        "http://api.alquran.cloud/v1/surah/" + params.id + "/ar.alafasy"
      );
      setSurah(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSurah();
  });

  return (
    <>
      <Header />
      <main>
        <section className={styles.surah}>
          <div className={styles.container + " container"}>
            {surah?.ayahs.map((ayah) => (
              <div className={styles.ayah} key={ayah.number}>
                <audio src={ayah.audio} preload="auto" controls></audio>
                <h2 className={styles.ayahText}>{ayah.text}</h2>
              </div>
            ))}

            <audio
              src={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surah?.number}.mp3`}
              preload="auto"
              controls
            ></audio>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Surah;
