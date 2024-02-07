import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../css/hero.module.css'

const CSSTransitionCA = ({ children, isLoading }) => {
  return (
    <div>
        <CSSTransition
        in={!isLoading}
        timeout={2000}
        classNames={{
            enter: styles.dataEnter,
            enterActive: styles.dataEnterActive,
            exit: styles.dataExit,
            exitActive: styles.dataExitActive
        }}
        unmountOnExit
        >
        <div className>
          {children}
        </div>
        </CSSTransition>
        {isLoading && <div className={styles.placeholder}></div>}
    </div>
  );
};

export default CSSTransitionCA;