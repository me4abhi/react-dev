import "./styles.scss";
import reactLogo from "../../assets/react.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <a
          href="https://react.dev/reference/react"
          rel="noreferrer"
          target="_blank"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>React Hooks</h1>
      </div>
      <div className="header-links">
        <a href="">useCallback</a>
        <a href="">useMemo</a>
      </div>
    </div>
  );
};

export default Header;
