import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.start}>
        <NavLink to="/">Start</NavLink>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/aboutme">Om Mig</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/skills">Det här kan jag</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/experience">Erfarenhet</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/contact">Kontakta mig</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
