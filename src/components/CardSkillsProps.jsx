import styles from "../components.css/CardSkills.module.css";

//Skill1 = html, skill2 = css, skill3 = javascript, skill4 = react.
function Skills(props) {
  return (
    <section className={styles.card__container}>
      <div className={styles.card}>{props.skill1}</div>

      <div className={styles.card}>{props.skill2}</div>

      <div className={styles.card}>{props.skill3}</div>
      <div className={styles.card}>{props.skill4}</div>
    </section>
  );
}
export default Skills;
