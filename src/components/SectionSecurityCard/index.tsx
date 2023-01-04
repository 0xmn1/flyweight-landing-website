import Card from 'react-bootstrap/Card';
import IconRound from '../IconRound';
import React from 'react';
import styles from './SectionSecurityCard.module.scss';

type SectionSecurityCardProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const SectionSecurityCard = (props: SectionSecurityCardProps) => (
  <article className={`d-flex p-3 ${styles.wrapper}`}>
    <Card className={styles.card}>
      <Card.Title className="mb-0 py-2 d-flex justify-content-center">
        <IconRound>
          {props.icon}
        </IconRound>
      </Card.Title>
      <Card.Body className="pt-0">
        <Card.Text>
          {props.children}
        </Card.Text>
      </Card.Body>
    </Card>
  </article>
);

export default SectionSecurityCard;
