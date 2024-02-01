import styles from "../components.css/Aboutme.module.css";

function Aboutme() {
  return (
    <div className={styles.container}>
      <article className={styles.aboutme__container}>
        <img
          className={styles.profilpic}
          src="https://as2.ftcdn.net/v2/jpg/05/90/45/35/1000_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg"
          alt="Profilpic"
        />

        <p
          className={styles.paragraph}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            padding: "1rem",
          }}
        >
          Hej, jag heter Johan och jag är 27 år gammal, och just nu är jag på en
          spännande resa mot att bli en front-end utvecklare. Min passion för
          teknik och design har lett mig till en värld där kreativitet möter
          kod, och varje dag är en ny möjlighet att lära och växa. För sex
          månader sedan påbörjade jag denna resa, och sedan dess har jag varit
          helt uppslukad av att lära mig allt som har med front-end utveckling
          att göra.
          <p className={styles.paragraph}>
            Min utbildning har inte bara gett mig tekniska färdigheter i HTML,
            CSS, JavaScript och React, men också en djupare förståelse för hur
            viktigt det är att skapa användarvänliga och tillgängliga
            webbplatser. Jag älskar utmaningar och ser dem som möjligheter att
            växa. Att ständigt utmana mig själv och lära mig nya saker är något
            som driver mig. Jag tror fast på att bästa sättet att lära sig är
            genom att göra, experimentera och ibland göra misstag. Varje kodrad
            jag skriver och varje projekt jag tar mig an för mig ett steg
            närmare min dröm om att bli en skicklig front-end utvecklare.
          </p>
        </p>
      </article>
    </div>
  );
}

export default Aboutme;
