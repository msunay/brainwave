import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.headerContainer}>
        <h2>Brainwave.io</h2>
        <div className={styles.navControls}>
          <div className={styles.leftSideControls}>
            <h5 className={styles.navText}>Demos</h5>
            <h5 className={styles.navText}>Pages</h5>
            <h5 className={styles.navText}>Support</h5>
            <h5 className={styles.navText}>Contact</h5>
          </div>
          <div className={styles.rightSideControls}>
            <h5 className={styles.signInBtn}>Sign In</h5>
            <div className={styles.signUpBtn}>
              <h5 className={styles.navText}>Sign Up</h5>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
