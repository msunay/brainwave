"use client";

import React from "react";
import styles from "./heroSection.module.css";

import IosSwitchMaterialUi from "ios-switch-material-ui";
export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Pricing & Plans</h1>
      <div className={styles.heroText}>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <p>Build your next consultancy website within few minutes.</p>
      </div>
      <div className={styles.planSwitchContainer}>
        <p>Monthly</p>
        <IosSwitchMaterialUi defaultKnobOnLeft colorKnobOnLeft={"#FFFFFF"} />
        <div>Yearly</div>
        <div className={styles.discount}>SAVE 25%</div>
      </div>
    </section>
  );
}
