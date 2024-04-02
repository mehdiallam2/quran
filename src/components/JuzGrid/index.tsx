import styles from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JuzGrid() {
  interface Juz {
    id: number;
    juz_number: number;
    verse_mapping: {
      1: string;
      2: string;
    };
    first_verse_id: number;
    last_verse_id: number;
    verses_count: number;
  }

  const [juzs, setJuzs] = useState<Juz[]>([]);

  async function getJuzs() {
    try {
      const response = await axios.get("https://api.quran.com/api/v4/juzs");
      setJuzs(response.data.juzs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJuzs();
  }, []);

  return (
    <section className={styles.grid}>
      {juzs.map((juz, index) => (
        <Link className={styles.card} to={"/juz/" + juz.juz_number} key={index}>
          {juz.juz_number}
        </Link>
      ))}
    </section>
  );
}

export default JuzGrid;
