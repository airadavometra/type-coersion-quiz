import s from "./Header.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import WidthContainer from "../WidthContainer/WidthContainer";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import { navigation } from "../../constants/navigationItem";
import { Close } from "../../icons/Close";
import { Menu } from "../../icons/Menu";
import { AuthButton } from "../AuthButton/AuthButton";

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
            {navigation.map(({ id, title, path }) => (
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
            <Close className={s.menu} />
          ) : (
            <Menu className={s.menu} />
          )}
          <VisuallyHidden>{`${
            isMobileMenuOpen ? "Close" : "Open"
          } menu`}</VisuallyHidden>
        </button>
        <AuthButton className={s.authButton} />
      </WidthContainer>
    </header>
  );
};
