import { useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="container">
      <Header />
      <SearchBar />
    </div>
  );
};

export default App;
