import s from "./Header.module.css";
import classNames from "classnames";
import WidthContainer from "../WidthContainer/WidthContainer";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import { NAVIGATION_ITEMS } from "../../constants/navigationItem";
import { Close } from "../../icons/Close";
import { Menu } from "../../icons/Menu";
import { Github } from "../../icons/Github";
import { Link } from "../Link/Link";

type HeaderProps = {
  selectedMenuItemId?: number;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu(): void;
};

export const Header = ({
  selectedMenuItemId,
  isMobileMenuOpen,
  onToggleMobileMenu,
}: HeaderProps) => {
  return (
    <header className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <nav className={s.navigationContainer}>
          <ul className={s.navigation}>
            {NAVIGATION_ITEMS.map(({ id, title, path }) => (
              <li className={s.linkContainer} key={id}>
                <Link
                  to={path}
                  className={classNames(s.link, {
                    [s.selected]: id === selectedMenuItemId,
                  })}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className={s.menuButton} onClick={onToggleMobileMenu}>
          {isMobileMenuOpen ? (
            <Close className={s.icon} />
          ) : (
            <Menu className={s.icon} />
          )}
          <VisuallyHidden>{`${
            isMobileMenuOpen ? "Close" : "Open"
          } menu`}</VisuallyHidden>
        </button>
        {!isMobileMenuOpen && (
          <Link
            to="https://github.com/airadavometra/type-coersion-quiz"
            className={s.githubLink}
          >
            <Github className={s.githubIcon} />
            GitHub
          </Link>
        )}
      </WidthContainer>
    </header>
  );
};
