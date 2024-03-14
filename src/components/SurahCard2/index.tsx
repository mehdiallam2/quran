import { Chapter } from "@src/types/chapter";
import { Link } from "react-router-dom";

import "./index.css";

function SurahCard2({ surah }: { surah: Chapter }) {
  return (
    <Link className="surahCard2" to={"/surah/" + surah.id}>
      <div className="surahCard2-top">
        <div className="surahCard2-top-left">
          <small className="surahCard2-englishName">
            {surah.translated_name.name}
          </small>
          <small className="surahCard2-simpleName">
            Surah <br />
            {surah.name_simple}
          </small>
        </div>
        <div className="surahCard2-top-right">
          <span className="surahCard2-surahId">{surah.id}</span>
        </div>
      </div>
      <div className="surahCard2-bottom">
        <small className="surahCard2-arabicName">{surah.name_arabic}</small>
        <small className="surahCard2-versesCount">
          {surah.verses_count} Ayahs
        </small>
      </div>
    </Link>
  );
}

export default SurahCard2;
