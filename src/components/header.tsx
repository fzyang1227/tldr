import gear from "../assets/gear-32.png";
import "./header.css";

const Header = (props: {title: String, rightIcon: string}) => (
  <header className="p-3 text-bg-dark sticky-top">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center justify-content-center">
        <div className="d-flex justify-content-between align-items-center justify-content-center">
        <img
            src={gear} // insert logo here
            alt="options"
            className="ratio-1x1"
          ></img>
          <div className="p-2 logo-title">{props.title}</div>
        </div>
        <div className="text-end align-middle">
        <a href="settings.tsx">
          <i className={props.rightIcon}></i>
          </a>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
