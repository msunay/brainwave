import Header from "@/components/header/header";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/heroSection";
import PlansContainer from "@/components/plansContainer/plansContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <PlansContainer />
    </main>
  );
}
