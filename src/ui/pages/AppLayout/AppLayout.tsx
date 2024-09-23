import { Outlet } from "react-router-dom";
import styles from "./applayout.module.css";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";
import PageLoader from "../../components/PageLoader/PageLoader";
import Header from "../../components/Header/Header";

function AppLayout() {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preferences);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Effect to update isDark when preferences change
  useEffect(() => {
    setIsDark(preferences);
  }, [preferences, setIsDark]);

  return (
    <div
      className={styles.app_wrapper}
      id="app_wrapper"
      data-theme={isDark ? "dark" : "light"}
    >
      <div
        className={`${styles.page_loader_wrapper} ${
          !isActive ? styles.fadeOut : ""
        }`}
      >
        {isLoading ? <PageLoader /> : null}
      </div>

      <main
        className={`${styles.main} ${!isLoading ? styles.fadeIn : ""}`}
        id="main"
      >
        <Header />
        <Outlet context={{ isDark, setIsDark }} />
      </main>
    </div>
  );
}

export default AppLayout;
