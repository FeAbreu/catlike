import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
//import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import Logo from '../Assets/logo-pet.svg';
import { UserContext } from '../UserContext';

function Header() {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" arial-label="Dogs - Home">
          <img src={Logo} width="120" height="70" alt="Pets" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
