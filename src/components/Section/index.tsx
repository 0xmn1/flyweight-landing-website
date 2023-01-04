import React from 'react';
import styles from './Section.module.scss';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = (props: SectionProps) => (
  <section className={`${props.className} ${styles.wrapper}`}>
    {props.children}
  </section>
);

export default Section;
