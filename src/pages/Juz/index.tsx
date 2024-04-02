import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Juz() {
  const params = useParams();

  const [juz, setJuz] = useState<Juz | null>(null);

  async function getJuz() {
    try {
      const response = await axios.get(
        "http://api.alquran.cloud/v1/juz/" + params.id + "/quran-uthmani"
      );
      setJuz(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJuz();
  });

  return (
    <>
      <Header />
      <main>
        <section className={styles.surah}>
          <div className={styles.container + " container"}>
            {juz?.ayahs.map((ayah) => (
              <div>{ayah.text}</div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Juz;

export interface Juz {
  number: number;
  ayahs: Ayah[];
  surahs: Surahs;
  edition: Edition;
}

export interface Ayah {
  number: number;
  text: string;
  surah: Surah;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
}

export interface Surahs {
  "1": N1;
  "2": N2;
}

export interface N1 {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
}

export interface N2 {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
}

export interface Edition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: string;
  type: string;
  direction: string;
}
