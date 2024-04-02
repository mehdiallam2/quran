import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { add } from "redux/slices/recentlyReadSlice";
import { Surah } from "types/surahs";

function SurahCard({ surah }: { surah: Surah }) {
  const recentlyRead = useSelector((state: RootState) => state.recentlyReadReducer);
  const dispatch = useDispatch();

  function handleClick() {
    console.log(recentlyRead);
    dispatch(add(surah));
  }

  return (
    <Link className={styles.card} to={"/surah/" + surah.id} onClick={handleClick}>
      <div className={styles.left}>
        <div className={styles.shape}>
          <span className={styles.number}>{surah.id}</span>
        </div>
        <div className={styles.names}>
          <small className={styles.simpleName}>{surah.name_simple}</small>
          <small className={styles.translatedName}>{surah.translated_name.name}</small>
        </div>
      </div>
      <div className={styles.right}>
        <small className={styles.arabicName}>{surah.name_arabic}</small>
        <small className={styles.ayahsCount}>{surah.verses_count} Ayahs</small>
      </div>
    </Link>
  );
}

export default SurahCard;
