import Header from "@components/Header";
import SurahGrid from "@components/SurahGrid";
import RecentlyRead from "@components/RecentlyRead";
import { useContext } from "react";
import { RecentlyReadContext } from "@context/RecentlyReadContext";
import RamadanMubarak from "@src/components/RamadanMobarak";

function Home() {
  const { recentlyRead } = useContext(RecentlyReadContext)!;

  return (
    <>
      <Header />
      <RamadanMubarak />
      {recentlyRead.length > 0 && <RecentlyRead />}
      <SurahGrid />
    </>
  );
}

export default Home;
