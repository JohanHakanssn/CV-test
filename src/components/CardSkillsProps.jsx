import styles from "./CardSkills.module.css";

function Skills(props) {
  return (
    <div className={styles.grid__container}>
      <article className={styles.grid}>
        <span
          className={styles.card}
          style={{ backgroundColor: "rgba(255, 0, 0, 0.9)" }}
        >
          {props.skill1}
        </span>
        <span
          className={styles.card}
          style={{ backgroundColor: "rgba(38, 76, 228, 0.8)" }}
        >
          {props.skill2}
        </span>
        <span
          className={styles.card}
          style={{ backgroundColor: "rgba(247, 222, 30, 0.95)" }}
        >
          {props.skill3}
        </span>
        <span
          className={styles.card}
          style={{ backgroundColor: "rgba(97, 220, 251, 0.89)" }}
        >
          {props.skill4}
        </span>
      </article>
    </div>
  );
}
export default Skills;
