import Header from "@components/Header";
import SurahsGrid from "@components/SurahsGrid";
import RecentlyRead from "@components/RecentlyRead";
import Footer from "@components/Footer";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { clear } from "redux/slices/recentlyReadSlice";
import JuzGrid from "@components/JuzGrid";
import { useState } from "react";

function Home() {
  const recentlyRead = useSelector((state: RootState) => state.recentlyReadReducer);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Header />
      {recentlyRead.length > 0 && <RecentlyRead />}
      <button onClick={() => dispatch(clear())}>clear</button>
      <div className={styles.container + " container"}>
        <div className={styles.top}>
          <div className={styles.options}></div>
        </div>
        <SurahsGrid />
        <JuzGrid />
        <SurahsGrid sorted={true} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
