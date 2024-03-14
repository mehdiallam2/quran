import Header from "@components/Header";
import SurahGrid from "@components/SurahGrid";
import RecentlyRead from "@components/RecentlyRead";
import { useContext } from "react";
import { RecentlyReadContext } from "@context/RecentlyReadContext";

function Home() {
  const { recentlyRead } = useContext(RecentlyReadContext)!;

  return (
    <>
      <Header />
      {recentlyRead.length > 0 && <RecentlyRead />}
      <SurahGrid />
    </>
  );
}

export default Home;
