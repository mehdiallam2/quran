import SurahCard from "@components/SurahCard";
import styles from "./index.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Surah } from "types/surahs";

function SurahsGrid({ sorted }: { sorted?: boolean | undefined }) {
  const [surahs, setSurahs] = useState<Surah[]>([]);

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
  }, []);

  return (
    <section className={styles.grid}>
      {!sorted
        ? surahs.map((surah, index) => <SurahCard surah={surah} key={index} />)
        : surahs
            .sort((a, b) => a.revelation_order - b.revelation_order)
            .map((surah, index) => <SurahCard surah={surah} key={index} />)}
    </section>
  );
}

export default SurahsGrid;
