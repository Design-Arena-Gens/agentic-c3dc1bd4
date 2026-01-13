const characteristics = [
  {
    title: "Rejet des règles classiques",
    description:
      "Abandon des trois unités (temps, lieu, action) et liberté totale dans la construction dramatique."
  },
  {
    title: "Primauté de l'émotion",
    description:
      "Personnages habités par des passions extrêmes et des conflits intérieurs intenses."
  },
  {
    title: "Subjectivité assumée",
    description:
      "Exploration de la vie intérieure, des doutes et des tourments individuels."
  },
  {
    title: "Mélange des registres",
    description:
      "Tragique et comique, sublime et grotesque coexistent pour refléter la complexité humaine."
  },
  {
    title: "Ouverture au fantastique",
    description:
      "Présence d'éléments surnaturels ou symboliques pour sonder l'invisible."
  },
  {
    title: "Héros romantique",
    description:
      "Figure solitaire, marginale ou révoltée, en quête de liberté, d'amour ou de justice."
  }
];

const themes = [
  "Amour passionné, souvent tragique et destructeur",
  "Aspiration à la liberté, qu'elle soit politique, morale ou amoureuse",
  "Révolte contre l'autorité sociale, religieuse ou politique",
  "Lien privilégié avec la nature, refuge ou miroir des émotions",
  "Destin implacable qui pèse sur les personnages",
  "Présence persistante de la mort, perçue comme fatalité ou délivrance"
];

const figures = [
  {
    name: "Victor Hugo",
    works: "Hernani, Ruy Blas",
    note: "Porte-voix du mouvement : rejet des règles, souffle lyrique et engagement politique."
  },
  {
    name: "Alexandre Dumas père",
    works: "Henri III et sa cour, La Tour de Nesle",
    note: "Drames historiques spectaculaires, mêlant action, critique sociale et émotion."
  },
  {
    name: "Alfred de Musset",
    works: "Lorenzaccio, On ne badine pas avec l'amour",
    note: "Drames intimistes, centrés sur la psychologie et la désillusion."
  },
  {
    name: "Heinrich von Kleist",
    works: "Penthésilée",
    note: "Œuvre à la frontière du classicisme et du romantisme, portée par la violence tragique."
  },
  {
    name: "Georg Büchner",
    works: "Woyzeck, La Mort de Danton",
    note: "Précurseur du théâtre moderne, mêlant réalisme social et tension révolutionnaire."
  }
];

const impacts = [
  "Le théâtre s'émancipe durablement des carcans classiques et affirme la liberté artistique.",
  "La psychologie des personnages gagne en profondeur et en complexité.",
  "Les normes sociales et politiques sont interrogées voire contestées.",
  "Le drame romantique inspire le mélodrame puis le théâtre moderne et contemporain."
];

export default function Page() {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <p style={styles.tag}>Fiche de révision</p>
        <h1 style={styles.title}>Le drame romantique</h1>
        <p style={styles.intro}>
          Genre théâtral majeur du XIXᵉ siècle, le drame romantique rompt avec les règles du
          classicisme pour offrir une dramaturgie libre, exaltée et profondément humaine.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Caractéristiques essentielles</h2>
        <ul style={styles.grid}>
          {characteristics.map((item) => (
            <li key={item.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Thèmes récurrents</h2>
        <ul style={styles.list}>
          {themes.map((theme) => (
            <li key={theme} style={styles.listItem}>
              <span style={styles.bullet}>•</span>
              <span>{theme}</span>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Figures emblématiques</h2>
        <div style={styles.figureGrid}>
          {figures.map((figure) => (
            <article key={figure.name} style={styles.figureCard}>
              <header style={styles.figureHeader}>
                <h3 style={styles.figureName}>{figure.name}</h3>
                <p style={styles.figureWorks}>{figure.works}</p>
              </header>
              <p style={styles.figureNote}>{figure.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Impact et héritage</h2>
        <ul style={styles.list}>
          {impacts.map((impact) => (
            <li key={impact} style={styles.listItem}>
              <span style={styles.bullet}>•</span>
              <span>{impact}</span>
            </li>
          ))}
        </ul>
      </section>

      <aside style={styles.tip}>
        <h2 style={styles.tipTitle}>Astuce révision</h2>
        <p style={styles.tipText}>
          Retenir que le drame romantique célèbre la liberté, l'émotion, la fusion des genres et la
          contestation des normes, incarnés par des figures comme Victor Hugo.
        </p>
      </aside>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "3rem 1.5rem 5rem",
    display: "flex",
    flexDirection: "column",
    gap: "3rem"
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  tag: {
    fontSize: "0.85rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#4d648d",
    fontWeight: 600
  },
  title: {
    margin: 0,
    fontSize: "2.75rem",
    color: "#1c2a39"
  },
  intro: {
    margin: 0,
    fontSize: "1.1rem",
    maxWidth: "54ch"
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  sectionTitle: {
    margin: 0,
    fontSize: "1.75rem",
    color: "#223a5f"
  },
  grid: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gap: "1.25rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
  },
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 10px 30px rgba(15, 34, 58, 0.08)",
    minHeight: "180px",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.1rem",
    color: "#1c2a39"
  },
  cardText: {
    margin: 0,
    fontSize: "0.98rem",
    color: "#394b59"
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem"
  },
  listItem: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "flex-start",
    fontSize: "1rem"
  },
  bullet: {
    color: "#4d648d",
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: "1"
  },
  figureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.5rem"
  },
  figureCard: {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "1.75rem",
    boxShadow: "0 12px 32px rgba(18, 43, 66, 0.09)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  figureHeader: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem"
  },
  figureName: {
    margin: 0,
    fontSize: "1.15rem",
    color: "#1c2a39"
  },
  figureWorks: {
    margin: 0,
    fontSize: "0.95rem",
    color: "#4d648d"
  },
  figureNote: {
    margin: 0,
    fontSize: "0.95rem",
    color: "#394b59"
  },
  tip: {
    background: "linear-gradient(135deg, #223a5f, #4d648d)",
    color: "white",
    borderRadius: "20px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  tipTitle: {
    margin: 0,
    fontSize: "1.4rem"
  },
  tipText: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.7
  }
};
