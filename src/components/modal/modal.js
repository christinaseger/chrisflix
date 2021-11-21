import React from 'react';
import styles from './modal.module.css';

const Modal = ({ open = true, onClose = () => {}, children }) => {
  return open ? (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.close_button} onClick={onClose}>X</span>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;