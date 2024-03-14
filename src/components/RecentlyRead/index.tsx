import { useContext } from "react";
import "./index.css";
import { RecentlyReadContext } from "@context/RecentlyReadContext";
import SurahCard2 from "../SurahCard2";

function RecentlyRead() {
  const { recentlyRead } = useContext(RecentlyReadContext)!;

  return (
    <section className="recentlyRead">
      <div className="recentlyRead-container container">
        <h2 className="recentlyRead-title">Recently read</h2>
        <div className="recentlyRead-grid">
          {recentlyRead.map((recentlyReadSurah) => (
            <SurahCard2 surah={recentlyReadSurah} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentlyRead;
