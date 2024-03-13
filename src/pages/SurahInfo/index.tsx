import { ChapterInfo } from "@src/types/surahInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

function SurahInfo() {
  const params = useParams();
  const [surahInfo, setSurahInfo] = useState<ChapterInfo>();

  async function getSurahInfo() {
    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/chapters/${params.id}/info`,
      );
      setSurahInfo(response.data.chapter_info);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSurahInfo();
  }, []);

  return (
    <div className="">
      <div dangerouslySetInnerHTML={{ __html: surahInfo?.text ?? "Text" }} />
      {surahInfo?.source}
    </div>
  );
}

export default SurahInfo;
