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
      <p>{tg.initDataUnsafe.user.photo_url}</p>
      <img
        src={tg.initDataUnsafe.user.photo_url}
        style={{ width: 40, height: 40 }}
        alt=""
      />
      <p>{tg.initDataUnsafe.user.first_name}</p>
      <p>{tg.hash}</p>
    </div>
  );
};

export default App;
