import { Chapter } from "@src/types/chapter";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface AppRecentlyReadContextProps {
  recentlyRead: Chapter[];
  setRecentlyRead: Dispatch<SetStateAction<Chapter[]>>;
}

export const RecentlyReadContext =
  createContext<AppRecentlyReadContextProps | null>(null);

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

function RecentlyReadProvider({ children }: Props) {
  function getInitialState() {
    const recentlyRead = localStorage.getItem("recentlyRead");
    return recentlyRead ? JSON.parse(recentlyRead) : [];
  }
  const [recentlyRead, setRecentlyRead] = useState<Chapter[]>(getInitialState);

  useEffect(() => {
    localStorage.setItem("recentlyRead", JSON.stringify(recentlyRead));
  }, [recentlyRead]);

  return (
    <RecentlyReadContext.Provider value={{ recentlyRead, setRecentlyRead }}>
      {children}
    </RecentlyReadContext.Provider>
  );
}

export default RecentlyReadProvider;
