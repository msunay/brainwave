import React from "react";
import styles from "./planCard.module.css";

interface Props {
  type: string;
  price: number;
  colorDark: boolean;
}

export default function PlanCard({ type, price, colorDark }: Props) {
  const btnColor = colorDark ? styles.freeTrialBtn : styles.freeTrialBtnLight;
  return (
    <div className={styles.planCard}>
      <h5 className={styles.planType}>{type}</h5>
      <div className={styles.priceInfoContainer}>
        <div className={styles.priceContainer}>
          <h1 className={styles.currency}>$</h1>
          <h1 className={styles.price}>{price}</h1>
          <p className={styles.perMonth}>/ month</p>
        </div>
        <p className={styles.billing}>billed monthly</p>
      </div>
      <ul className={styles.benefitsListContainer}>
        <li className={styles.benefitContainer}>Commercial License</li>
        <li className={styles.benefitContainer}>100+ HTML UI Elements</li>
        <li className={styles.benefitContainer}>01 Domain Support</li>
        <li className={styles.benefitContainer}>6 Month Premium Support</li>
        <li className={styles.benefitContainer}>Lifetime Updates</li>
      </ul>
      <div className={styles.freeTrialBtnContainer}>
        <div className={btnColor}>
          <h3>Start Free Trial</h3>
        </div>
        <p className={styles.noCardReq}>No credit card required</p>
      </div>
    </div>
  );
}
