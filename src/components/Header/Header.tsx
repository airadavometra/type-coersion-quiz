import { useEffect, useState } from "react";
import s from "./Header.module.css";
import classNames from "classnames";
import WidthContainer from "../WidthContainer/WidthContainer";
import { NAVIGATION_ITEMS } from "../../constants/navigationItem";
import { Github } from "../../icons/Github";
import { Link } from "../Link/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const [selectedMenuItemId, setSelectedMenuItemId] = useState<
    number | undefined
  >();

  useEffect(() => {
    const selectedMenuItem = NAVIGATION_ITEMS.find(
      (nav) => nav.path === location.pathname
    );
    if (selectedMenuItem) {
      setSelectedMenuItemId(selectedMenuItem.id);
    } else {
      setSelectedMenuItemId(undefined);
    }
  }, [location]);

  return (
    <header className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <nav className={s.navigationContainer}>
          <ul className={s.navigation}>
            {NAVIGATION_ITEMS.map(({ id, title, path }) => (
              <li className={s.linkContainer} key={id}>
                <RouterLink
                  to={path}
                  className={classNames(s.link, {
                    [s.selected]: id === selectedMenuItemId,
                  })}
                >
                  {title}
                </RouterLink>
                <span className={s.hiddentBoldText}>{title}</span>
                {/* <Underline
                  className={classNames(s.linkUnderline, {
                    [s.selected]: id === selectedMenuItemId,
                  })}
                /> */}
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="https://github.com/airadavometra/type-coersion-quiz"
          className={s.githubLink}
        >
          <Github className={s.githubIcon} />
          GitHub
        </Link>
      </WidthContainer>
    </header>
  );
};
