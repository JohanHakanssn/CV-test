import styles from "../components/Homepage.module.css";
import ViewCounter from "../components/ViewCounter";
import { increment, decrement } from "../actions";
import { useDispatch } from "react-redux";

function Homepage() {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Välkommen</h1>

      {/* ----------------- */}

      <div className={styles.article}>
        <article className={styles.paragraph__container}>
          <p className={styles.p}>
            Hej, och <span style={{ fontWeight: "bold" }}>välkommen</span> till
            mitt CV! Mitt namn är Johan Håkansson, en 27-årig blivande front-end
            utvecklare med ett brinnande intresse för webbdesign och
            användarupplevelse. På den här webbplatsen får du en inblick i min
            resa inom front-end utveckling, där jag för närvarande fördjupar mig
            i studier och praktiska projekt.
          </p>
        </article>
        <div className={styles.redux__container}>
          <button onClick={() => dispatch(increment(1))}>Klicka här</button>
          <button onClick={() => dispatch(decrement(1))}>
            Klicka också här
          </button>
          <ViewCounter />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
