import styles from "../components.css/CardSkills.module.css";

function Skills(props) {
  return (
    <section className={styles.card__container}>
      <div className={styles.card} style={{ backgroundColor: "red" }}>
        {props.skill1}
      </div>

      <div className={styles.card} style={{ backgroundColor: "blue" }}>
        {props.skill2}
      </div>

      <div className={styles.card} style={{ backgroundColor: "orange" }}>
        {props.skill3}
      </div>
      <div className={styles.card} style={{ backgroundColor: "lightblue" }}>
        {props.skill4}
      </div>
    </section>
  );
}
export default Skills;
