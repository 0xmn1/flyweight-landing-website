'use strict';

import './flyweight-theme.scss';

import { ChevronDown } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import React from 'react';
import Row from 'react-bootstrap/Row';
import SectionContributing from './components/SectionContributing';
import SectionFaq from './components/SectionFaq';
import SectionHeadLead from './components/SectionHeadLead';
import SectionHeadUserProblem from './components/SectionHeadUserProblem';
import SectionHowItWorks from './components/SectionHowItWorks';
import SectionSecurityCards from './components/SectionSecurityCards';
import SectionSecurityLead from './components/SectionSecurityLead';
import styles from './App.module.scss';

const App = () => (
  <>
    <Header />
    <Container fluid>
      <Row className={`py-4 align-items-center ${styles.wrapperSection}`}>
        <Col xs={12} lg={6} className="px-5">
          <SectionHeadLead />
        </Col>
        <Col xs={12} lg={6} className="px-5">
          <SectionHeadUserProblem />
        </Col>
        <Col xs={12} className="text-center">
          <ChevronDown size={40} className={`position-relative ${styles.animFadeDown}`} />
        </Col>
      </Row>
      <Row className={`py-4 flex-column justify-content-center ${styles.wrapperSection} ${styles.bgMystic}`}>
        <Col xs={12} className="text-center">
          <SectionHowItWorks />
        </Col>
      </Row>
      <Row className={`py-4 flex-column justify-content-center bg-crease ${styles.wrapperSection}`}>
        <Col xs={12} className="text-center">
          <SectionSecurityLead />
        </Col>
        <Col xs={12} className="mt-4 px-5 d-flex flex-wrap">
          <SectionSecurityCards />
        </Col>
      </Row>
      <Row className={`pt-4 pb-5 flex-column align-content-center ${styles.wrapperSection} ${styles.bgMystic}`}>
        <Col xs={12} md={10} className="px-5 text-center">
          <SectionFaq />
        </Col>
      </Row>
      <Row className={`py-4 justify-content-center bg-crease ${styles.bgBlack}`}>
        <Col xs={12} md={10} className="d-flex px-5">
          <SectionContributing />
        </Col>
      </Row>
    </Container>
  </>
);

export default App;
