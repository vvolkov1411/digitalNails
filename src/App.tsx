import { useEffect } from "react";
const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
        consequatur.
      </p>
      <p>{tg.initDataUnsafe.user.username}</p>
      <p>{tg.hash}</p>
    </div>
  );
};

export default App;
