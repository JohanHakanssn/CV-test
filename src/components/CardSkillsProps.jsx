import styles from "./CardSkills.module.css";
import image1 from "../images/CSS-Logo.jpg";
import image2 from "../images/html-logo.jng";
import image3 from "../images/Javascript logo.png";
import image4 from "../images/React-icon.svg.png";

function Skills(props) {
  return (
    <section className={styles.card__container}>
      <div className={styles.card}>
        {props.skill1}
        <img src={image2} alt="HTML.logo" />
      </div>

      <div className={styles.card}>
        {props.skill2}
        <img src={image1} alt="CSS.logo" />
      </div>

      <div className={styles.card}>
        {props.skill3}
        <img src={image3} alt="Javascript.logo" />
      </div>
      <div className={styles.card}>
        {props.skill4}
        <img src={image4} alt="REACT.logo" />
      </div>
    </section>
  );
}
export default Skills;
