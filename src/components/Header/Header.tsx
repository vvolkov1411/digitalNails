const tg = window.Telegram.WebApp;
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="photo">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.85 7.94999C14.85 6.37517 13.5748 5.09999 12 5.09999C10.4252 5.09999 9.15 6.37517 9.15 7.94999C9.15 9.52481 10.4252 10.8 12 10.8C13.5748 10.8 14.85 9.52481 14.85 7.94999ZM16.65 7.94999C16.65 10.5189 14.5689 12.6 12 12.6C9.43107 12.6 7.35 10.5189 7.35 7.94999C7.35 5.38106 9.43107 3.29999 12 3.29999C14.5689 3.29999 16.65 5.38106 16.65 7.94999ZM5.9 18.4286C5.9 19.1974 5.80923 19.1 6.23529 19.1H17.7647C18.1908 19.1 18.1 19.1974 18.1 18.4286C18.1 16.536 15.3218 15.4 12 15.4C8.67819 15.4 5.9 16.536 5.9 18.4286ZM4.1 18.4286C4.1 15.1018 7.77279 13.6 12 13.6C16.2272 13.6 19.9 15.1018 19.9 18.4286C19.9 20.1642 19.2145 20.9 17.7647 20.9H6.23529C4.78554 20.9 4.1 20.1642 4.1 18.4286Z"
            fill="var(--tg-theme-hint-color)"
          />
        </svg>
      </div>
      <div className="userName">
        <p>{tg.WebAppUser?.username}</p>
        {tg.initDataUnsafe.user?.first_name ?? "alfabank"}{" "}
      </div>
    </div>
  );
};

export default Header;
