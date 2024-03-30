import React, { useState } from 'react';
import styles from '../css/hamburgerIcon.module.css';

const HamburgerIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIcon = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleIcon}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default HamburgerIcon;
