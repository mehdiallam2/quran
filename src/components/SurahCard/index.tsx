import { Chapter } from "@src/types/chapter";
import { Link } from "react-router-dom";
import "./index.css";
import { useContext } from "react";
import { RecentlyReadContext } from "@src/context/RecentlyReadContext";

function SurahCard({ surah }: { surah: Chapter }) {
  // const recentlyReadSurahs = useContext(RecentlyReadContext);

  const { recentlyRead, setRecentlyRead } = useContext(RecentlyReadContext)!;

  function addTorecentlyRead() {
    const check = recentlyRead.some(
      (recentlyReadSurah) => recentlyReadSurah.id === surah.id,
    );
    if (!check) {
      // recentlyReadSurahs.push(surah);
      setRecentlyRead([...recentlyRead, surah]);
    }
  }
  return (
    <Link
      className="surahCard"
      onClick={addTorecentlyRead}
      to={`/surah/${surah.id}`}
    >
      <div className="surahCard-left">
        <div className="surahCard-numberShape">
          <span className="surahCard-number">{surah.id}</span>
        </div>
        <div className="surahCard-names">
          <small className="surahCard-simpleName">{surah.name_simple}</small>
          <small className="surahCard-englishName">
            {surah.translated_name.name}
          </small>
        </div>
      </div>
      <div className="surahCard-right">
        <small className="surahCard-arabicName">{surah.name_arabic}</small>
        <small className="surahCard-versesCount">
          {surah.verses_count} Ayahs
        </small>
      </div>
    </Link>
  );
}

export default SurahCard;
