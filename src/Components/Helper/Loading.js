import React from 'react';
import styles from './Loading.module.css';
import Logo from '../../Assets/logo.png';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <img
          className={styles.animeLoading}
          width="50"
          src={Logo}
          alt="Carregando..."
        />
      </div>
    </div>
  );
};

export default Loading;
