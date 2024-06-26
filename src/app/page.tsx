import Header from "@/components/header/header";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/heroSection";
import PlansContainer from "@/components/plansContainer/plansContainer";
import FeaturesSection from "@/components/featuresSection/featuresSection";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <PlansContainer />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
