import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./applayout.module.css";

function AppLayout() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
