import { Chapter } from "@src/types/chapter";
import { Link } from "react-router-dom";
import "./index.css";

function SurahCard({ surah }: { surah: Chapter }) {
  return (
    <Link className="surahCard" to={`/surah/${surah.id}`}>
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
