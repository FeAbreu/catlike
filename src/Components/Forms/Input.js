import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, value, name, onChange, onBlur, error }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
