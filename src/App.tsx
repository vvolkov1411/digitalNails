import { useEffect } from "react";
const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
  });

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <p>{tg.user?.username}</p>
      <pre>{tg.user}</pre>
    </div>
  );
};

export default App;
