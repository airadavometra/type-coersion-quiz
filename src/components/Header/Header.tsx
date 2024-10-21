import { useEffect, useState } from "react";
import s from "./Header.module.css";
import classNames from "classnames";
import WidthContainer from "../WidthContainer/WidthContainer";
import { NAVIGATION_ITEMS } from "../../constants/navigationItem";
import { Github } from "../../icons/Github";
import { Link } from "../Link/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleUp } from "../../motions/scaleUp";

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
              <motion.li
                className={s.linkContainer}
                key={id}
                variants={scaleUp}
                whileHover={scaleUp.hover}
              >
                <RouterLink
                  to={path}
                  className={classNames(s.link, {
                    [s.selected]: id === selectedMenuItemId,
                  })}
                >
                  {title}
                </RouterLink>
                <span className={s.hiddentBoldText}>{title}</span>
                <img
                  src={`/MenuUnderline_${title.replace(/\s/g, "")}.png`}
                  aria-hidden
                  className={classNames(
                    s.linkUnderline,
                    [s[title.replace(/\s/g, "").toLowerCase()]],
                    {
                      [s.selected]: id === selectedMenuItemId,
                    }
                  )}
                />
              </motion.li>
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
