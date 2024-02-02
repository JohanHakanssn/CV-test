import { NavLink } from "react-router-dom";
import styles from "../components.css/PageNav.module.css";

function PageNav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.start}>
        <NavLink to="/vite-react/">Start</NavLink>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/aboutme">Om mig</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/skills">Det här kan jag</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/projekt">Projekt</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/contact">Kontakta mig</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
