import Col from 'react-bootstrap/Col';
import React from 'react';
import styles from './SectionUserProblem.module.scss';

const SectionHeadUserProblem = () => (
  <>
    <h4>
      What user problem does Flyweight solve?
    </h4>
    <p className="lead">
      Anonymous web3 users only have 2 options to perform &quot;set and forget&quot; <mark>price-triggered trade orders</mark>.
    </p>
    <p>
      Whilst this order type is widely supported on <strong>centralized exchanges</strong>, the <a href="https://en.wikipedia.org/wiki/FTX#November_2022_crisis_and_bankruptcy" title="Opens wikipedia article on FTX bankruptcy in a new tab" target="_blank">SBF/FTX incident</a> has led to a significant loss of trust. In addition to counterparty risk, most CEX's require comprehensive KYC (i.e.: <a href="https://fortune.com/crypto/2022/10/07/did-celsius-dox-its-customer-base/" title="Opens celsius media coverage in a new tab" target="_blank">risk of doxing during bankruptcy</a>).
    </p>
    <p>
      Thus <strong>decentralized exchanges</strong> are the ideal option, but often require unlimited token approvals for coins residing in a user's wallet. However this makes the user vulnerable to platform attacks, because usually they will only <a href="https://revoke.cash/" target="_blank" title="Opens revoke.cash in a new tab">revoke approvals</a> <em>after</em> the attack has already happened.
    </p>
    <p>
      <a href="https://uniswap.org/" target="_blank" title="Open uniswap homepage in a new tab">Uniswap</a> does not operate on an order-book model, &amp; therefore does not support trigger-based orders. They currently suggest a suboptimal alternative of setting LP ranges. However this is not a <em>true</em> trigger-based order, because the trade <strong>unswaps</strong> itself if the price reverses back to the LP price.
    </p>
  </>
);

export default SectionHeadUserProblem;
