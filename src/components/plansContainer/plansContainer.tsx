import React from "react";
import styles from "./plansContainer.module.css";
import PlanCard from "../planCard/planCard";

export default function PlansContainer() {
  return (
    <section className={styles.plansContainer}>
      <PlanCard type="STARTER" price={19} colorDark={false} />
      <PlanCard type="STANDARD" price={49} colorDark={true} />
      <PlanCard type="PREMIUM" price={99} colorDark={false} />
    </section>
  );
}
