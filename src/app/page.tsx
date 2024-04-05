import Header from "@/components/header/header";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/heroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
    </main>
  );
}
