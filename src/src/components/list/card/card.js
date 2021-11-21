import React from 'react';
import styles from './card.module.css';

const Card = ({ item, onClick }) => (
  <div className={styles.container} style={{ backgroundImage: `url(${item.thumbnailUrl})` }} onClick={onClick}>
    <div className={styles.info}>
      <p><b>{item.title}</b></p>
    </div>
  </div>
);

export default Card;