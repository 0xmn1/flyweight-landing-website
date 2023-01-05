import { CloudHaze2, CloudPlus, CloudSlash } from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

import DiagramOrderCancellation from '../DiagramOrderCancellation';
import DiagramOrderCreation from '../DiagramOrderCreation';
import DiagramOrderExecution from '../DiagramOrderExecution';
import React from 'react';
import styles from './SectionHowItWorks.module.scss';

const SectionHowItWorks = () => (
  <>
    <h2>
      Protocol functionality
    </h2>
    <p>
      The Flyweight platform supports 3 primary use cases for managing price-triggered orders:
      <br />
      order <strong>creation</strong>, <strong>execution</strong> &amp; <strong>cancellation</strong>.
    </p>
    <section className="px-md-5 d-flex flex-column">
      <Row className="d-flex justify-content-between align-items-center">
        <Col xs={12} md={5} className="text-start">
          <h3 className="d-flex align-items-center lead">
            <CloudPlus className="me-2" />
            Order creation
          </h3>
          <p>
            Users can utilize the web3 front-end with their Metamask browser extension to create orders.
          </p>
          <p>
            New orders do not require KYC, but most importantly, there are <mark>no unlimited token approvals required</mark> for a user wallet.
          </p>
          <p>
            1 transaction to store the new orders details in the smart contract, &amp; 1 transaction to transfer the ERC20 into the smart contract. Whilst users are able to execute the ERC20 transfer using either the web3 interface, or manually through a means of their choice such as Metamask. Using the web3 interface allows the on-chain deposit to be verified faster.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-none d-md-block">
          <DiagramOrderCreation />
        </Col>
      </Row>
      <Row className={`py-4 my-4 d-flex justify-content-between align-items-center ${styles.articleOrderExecution}`}>
        <Col xs={12} md={6} className="d-none d-md-block">
          <DiagramOrderExecution />
        </Col>
        <Col xs={12} md={5} className="text-start">
          <h3 className="d-flex align-items-center lead">
            <CloudHaze2 className="me-2" />
            Order execution
          </h3>
          <p>
            An oracle continually compares spot price versus the order condition using CoinMarketCap.
          </p>
          <p>
            Once the price condition is met, the swap is sent to the Uniswap router.
          </p>
          <p>
            Resultant coins are immediately sent to the order&lsquo;s owner address. Unlike other protocols, this last step happens <mark>automatically</mark> at the smart contract level &amp; is not some sort of &quot;manual&quot; button the user clicks to withdraw funds from the smart contract.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between align-items-center">
        <Col xs={12} md={5} className="text-start">
          <h3 className="d-flex align-items-center lead">
            <CloudSlash className="me-2" />
            Order cancellation
          </h3>
          <p>
            Users can initiate a transaction to cancel <em>untriggered</em> orders (i.e.: the order has the ERC20 deposited into the smart contract, but has no been executed yet).
          </p>
          <p>
            The deposited ERC20 coins are then <mark>immediately</mark> returned to the order owner&lsquo;s address (custody).
          </p>
          <p>
            Once the coins are sent back, this will of course cancel the order inside the smart contract. This is illustrated on the web3 front-end under the &quot;Status&quot; column. If the user changes their mind &amp; wants the order online again, they can always create a new order with the same price condition settings.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-none d-md-block">
          <DiagramOrderCancellation />
        </Col>
      </Row>
    </section>
  </>
);

export default SectionHowItWorks;
