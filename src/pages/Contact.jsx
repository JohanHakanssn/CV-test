import { useState } from "react";
import styles from "../components.css/Contact.module.css";

//Modal fönster
function Contact() {
  const [isModalHidden, setIsModalHidden] = useState(true);

  const toggleModal = () => {
    setIsModalHidden(!isModalHidden); // Ändrar på isModalHidden till det motsatta värdet.
  };

  return (
    <div className={styles.contact__container}>
      <section className={styles.modal__container}>
        <button className={styles.btn} onClick={toggleModal}>
          Klicka här för att kontakta mig!
        </button>
        <div
          className={`${styles.modal} ${isModalHidden ? styles.hidden : ""}`}
        >
          <button className={styles.close__btn} onClick={toggleModal}>
            X
          </button>
          <p>Telefon: 073 034 76 72</p>
          <p>Email: Johan1hakansson@gmail.com</p>
        </div>
        <div
          className={`${styles.overlay} ${isModalHidden ? styles.hidden : ""}`}
        ></div>
      </section>
    </div>
  );
}

export default Contact;
