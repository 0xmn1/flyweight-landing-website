import OrderCancellation from './order-cancellation.png';
import React from 'react';
import styles from './DiagramOrderCancellation.module.scss';

const DiagramOrderCancellation = (props: unknown) => (
  <img src={OrderCancellation} alt="diagram of order cancellation" className={styles.figure} />
);

export default DiagramOrderCancellation;
