import RecentlyReadCard from "@components/RecentlyReadCard";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import styles from "./index.module.css";

function RecentlyRead() {
  const recentlyRead = useSelector((state: RootState) => state.recentlyReadReducer);
  return (
    <section className={styles.recentlyRead}>
      <div className={styles.container + " container"}>
        <h2 className={styles.title}>Recently read</h2>
        <div className={styles.grid}>
          {recentlyRead.map((recentlyReadSurah) => (
            <RecentlyReadCard surah={recentlyReadSurah} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentlyRead;
