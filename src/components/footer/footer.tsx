import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import facebookIcon from "@public/icons/icons8-facebook-24.png";
import twitterIcon from "@public/icons/icons8-twitter-24.png";
import instagramIcon from "@public/icons/icons8-instagram-24.png";
import linkedinIcon from "@public/icons/icons8-twitter-24.png";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.bottomNavContainer}>
        <div className={styles.bottomNav}>
          <div className={styles.navList}>
            <p className={styles.title}>Company</p>
            <p className={styles.list}>About Us</p>
            <p className={styles.list}>Contact Us</p>
            <p className={styles.list}>Careers</p>
            <p className={styles.list}>Press</p>
          </div>
          <div className={styles.navList}>
            <p className={styles.title}>Product</p>
            <p className={styles.list}>Features</p>
            <p className={styles.list}>Pricing</p>
            <p className={styles.list}>News</p>
            <p className={styles.list}>Help Desk</p>
            <p className={styles.list}>Support</p>
          </div>
          <div className={styles.navList}>
            <p className={styles.title}>Services</p>
            <p className={styles.list}>Digital Marketing</p>
            <p className={styles.list}>Content Writing</p>
            <p className={styles.list}>SEO for Buisness</p>
            <p className={styles.list}>UI Design</p>
          </div>
          <div className={styles.navList}>
            <p className={styles.title}>Legal</p>
            <p className={styles.list}>Privacy Policy</p>
            <p className={styles.list}>Terms & Conditions</p>
            <p className={styles.list}>Return Policy</p>
          </div>
          <div className={styles.navList}>
            <p className={styles.title}>Contact Us</p>
            <p className={styles.list}>support@getyourbrainwaved.io</p>
            <p className={styles.list}>+44 123 456 789</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.copyrSocialsContainer}>
        <p className={styles.copyr}>
          © 2024 Copyright, All Right Reserved, Made by Alex Eze
        </p>
        <div className={styles.socialsContainer}>
          <Image src={twitterIcon} alt="Twitter Icon" quality={100} />
          <Image src={facebookIcon} alt="Facebook Icon" quality={100} />
          <Image src={instagramIcon} alt="Instagram Icon" quality={100} />
          <Image src={linkedinIcon} alt="Linkedin Icon" quality={100} />
        </div>
      </div>
    </footer>
  );
}
