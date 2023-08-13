import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <form className="searchBar">
      <div className="icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="1">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.1428 3.42857C6.88227 3.42857 3.42847 6.88238 3.42847 11.1429C3.42847 15.4033 6.88227 18.8571 11.1428 18.8571C12.9642 18.8571 14.6382 18.2259 15.9579 17.1702L19.9652 21.1775C20.3 21.5123 20.8427 21.5123 21.1774 21.1775C21.5122 20.8428 21.5122 20.3001 21.1774 19.9653L17.1701 15.958C18.2258 14.6383 18.857 12.9643 18.857 11.1429C18.857 6.88238 15.4032 3.42857 11.1428 3.42857ZM11.1428 5.14286C7.82904 5.14286 5.14275 7.82915 5.14275 11.1429C5.14275 14.4566 7.82904 17.1429 11.1428 17.1429C14.4565 17.1429 17.1428 14.4566 17.1428 11.1429C17.1428 7.82915 14.4565 5.14286 11.1428 5.14286Z"
              fill="var(--tg-theme-hint-color)"
            />
          </g>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Поиск работ"
        value={message}
        onChange={(text) => setMessage(text.target.value)}
      />
    </form>
  );
};

export default SearchBar;
