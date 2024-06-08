import { Outlet } from "react-router-dom";
import styles from "./applayout.module.css";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";

function AppLayout() {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(preferences);

  const [isDark, setIsDark] = useLocalStorage("isDark", preferences);
  console.log(isDark);

  // Effect to update isDark when preferences change
  useEffect(() => {
    setIsDark(preferences);
  }, [preferences, setIsDark]);

  return (
    <div className={styles.app_wrapper} data-theme={isDark ? "dark" : "light"}>
      <main className={styles.main}>
        <Outlet context={{ isDark, setIsDark }} />
      </main>
    </div>
  );
}

export default AppLayout;
