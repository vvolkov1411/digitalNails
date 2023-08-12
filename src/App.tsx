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
      <p>{tg.user?.username}</p>
      <p>{tg.user?.first_name}</p>
      <p>{tg.user?.last_name}</p>
      <p>{tg.user?.is_premium}</p>
    </div>
  );
};

export default App;
