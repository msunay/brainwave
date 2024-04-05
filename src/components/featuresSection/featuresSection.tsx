"use client";

import React from "react";
import styles from "./featuresSection.module.css";


export default function FeaturesSection() {
  const gridItemText =
    "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.";
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.featuresTitleContainer}>
        <h1 className={styles.title}>Check our features</h1>
        <div className={styles.featuresText}>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
          <p>Build your next consultancy website within few minutes.</p>
        </div>
      </div>
      <div className={styles.featuresGridContainer}>
        <div className={styles.gridItemContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.gridItemTitle}>Quick setup process</h2>
            <p className={styles.gridItemText}>{gridItemText}</p>
          </div>
        </div>
        <div className={styles.gridItemContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.gridItemTitle}>Create custom orders</h2>
            <p className={styles.gridItemText}>{gridItemText}</p>
          </div>
        </div>
        <div className={styles.gridItemContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.gridItemTitle}>Multiple coupons</h2>
            <p className={styles.gridItemText}>{gridItemText}</p>
          </div>
        </div>
        <div className={styles.gridItemContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.gridItemTitle}>Organize your campaigns</h2>
            <p className={styles.gridItemText}>{gridItemText}</p>
          </div>
        </div>
        <div className={styles.gridItemContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.gridItemTitle}>Manage Customers</h2>
            <p className={styles.gridItemText}>{gridItemText}</p>
          </div>
        </div>
        <div className={styles.gridItemContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.gridItemTitle}>Track progress fast</h2>
            <p className={styles.gridItemText}>{gridItemText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
