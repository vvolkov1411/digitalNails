import { useEffect } from "react";
import Header from "./components/Header/Header";
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
    </div>
  );
};

export default App;
