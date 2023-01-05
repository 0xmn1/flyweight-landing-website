import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import IconRound from '../IconRound';
import React from 'react';
import styles from './SectionSecurityCard.module.scss';

type SectionSecurityCardProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const SectionSecurityCard = (props: SectionSecurityCardProps) => (
  <Col xs={12} sm={6} lg={4} className="d-flex px-sm-1 px-md-3 py-3">
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
  </Col>
);

export default SectionSecurityCard;
