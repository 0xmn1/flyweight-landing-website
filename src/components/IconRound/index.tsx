import React from 'react';
import styles from './IconRound.module.scss';

type IconRoundProps = {
  children: React.ReactNode;
};

const IconRound = (props: IconRoundProps) => (
  <span className={`d-inline-flex justify-content-center align-items-center ${styles.wrapper}`}>
    {props.children}
  </span>
);

export default IconRound;
