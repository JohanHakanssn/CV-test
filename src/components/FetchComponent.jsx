import { useEffect } from "react";
import { useState } from "react";
import styles from "../components.css/Experience.module.css";

export function FetchComponent() {
  const URL = "https://api.github.com/users/JohanHakanssn/repos";

  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        SetData(data);
      });
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Mina projekt</h2>
      <section className={styles.section}>
        {data.map((repo) => (
          <ul key={repo.id}>
            <li className={styles.li}>
              <a href={repo.html_url} className={styles.a}>
                <h3 className={styles.h3}>{repo.name}</h3>
              </a>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
}

export default FetchComponent;
