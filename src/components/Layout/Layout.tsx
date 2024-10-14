import { ReactNode, useEffect, useState } from "react";
import s from "./Layout.module.css";
import { useLocation } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../constants/navigationItem";
import { Header } from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Footer } from "../Footer/Footer";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // needed for initial load
    document.body.classList.toggle("frozen");
  }, []);

  useEffect(() => {
    document.body.classList.toggle("frozen");
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div id="layout" className={s.layout}>
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
          selectedMenuItemId={selectedMenuItemId}
        />
        {isMobileMenuOpen && <MobileMenu />}
        <main className={s.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
