import { Link } from "react-router-dom";
import { Surah } from "types/surahs";
import styles from "./index.module.css";

function RecentlyReadCard({ surah }: { surah: Surah }) {
  return (
    <Link className={styles.card} to={"/surah/" + surah.id}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <small className={styles.englishTranslatedName}>{surah.translated_name.name}</small>
          <small className={styles.englishName}>
            Surah <br />
            {surah.name_simple}
          </small>
        </div>
        <div className={styles.topRight}>
          <span className={styles.surahNumber}>{surah.id}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <small className={styles.arabicName}>{surah.name_arabic}</small>
        <small className={styles.numberOfAyahs}>{surah.verses_count} Ayahs</small>
      </div>
    </Link>
  );
}

export default RecentlyReadCard;
