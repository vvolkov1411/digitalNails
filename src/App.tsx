import { useEffect } from "react";
const tg = window.Telegram.WebApp;
const user = window.Telegram.WebAppUser;

const App = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
    alert(user?.photo_url);
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      <img src={user?.photo_url} style={{ width: 40, height: 40 }} alt="" />
      <p>{tg.initDataUnsafe.user.first_name}</p>
      <p>{tg.hash}</p>
    </div>
  );
};

export default App;
