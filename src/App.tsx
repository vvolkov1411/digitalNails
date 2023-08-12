import { useEffect } from "react";

import { useTelegram } from "./hooks/useTelegram.js";

const App = () => {
  const { tg, user, onClose } = useTelegram();

  useEffect(() => {
    tg.ready();
  });

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <p>{user?.username}</p>
    </div>
  );
};

export default App;
