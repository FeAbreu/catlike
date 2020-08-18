import React from 'react';
import styles from './Footer.module.css';
import LogoWhite from '../Assets/logo-white.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logoWhite} src={LogoWhite} alt="CatLike" />
      <p>Catlike © 2020</p>
    </footer>
  );
}

export default Footer;
