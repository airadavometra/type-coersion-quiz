import classNames from "classnames";
import s from "./MobileMenu.module.css";
import { Link } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../constants/navigationItem";

const MobileMenu = () => {
  return (
    <div className={classNames(s.menuContainer)}>
      <nav className={s.menu}>
        <ul className={s.linksList}>
          {NAVIGATION_ITEMS.map(({ id, title, path }) => (
            <li key={id}>
              <Link to={path} className={classNames(s.link)}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
