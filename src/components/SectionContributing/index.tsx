import Button from '../Button';
import Col from 'react-bootstrap/Col';
import React from 'react';
import styles from './SectionContributing.module.scss';

const SectionContributing = () => (
  <>
    <div className={`mb-5 mb-md-0 me-md-5 ${styles.listWrapper}`}>
      <h6 className={styles.listHeading}>Source code</h6>
      <ul className={`mb-0 px-0 ${styles.list}`}>
        <li>
          <a href="https://github.com/0xmn1/flyweight-oracle-nodes" title="Open github in a new tab" target="_blank">
            Oracles
          </a>
        </li>
        <li>
          <a href="https://github.com/0xmn1/flyweight-smart-contracts" title="Open github in a new tab" target="_blank">
            Smart Contracts
          </a>
        </li>
        <li>
          <a href="https://github.com/0xmn1/flyweight-web3-frontend" title="Open github in a new tab" target="_blank">
            Web3 Front-End
          </a>
        </li>
        <li>
          <a href="https://github.com/0xmn1/flyweight-landing-website" title="Open github in a new tab" target="_blank">
            User Information Website
          </a>
        </li>
      </ul>
    </div>
    <div className={`me-md-5 ${styles.listWrapper}`}>
      <h6 className={styles.listHeading}>Goerli chain</h6>
      <ul className={`mb-0 px-0 ${styles.list}`}>
        <li>
          <a href="https://goerli.etherscan.io/address/0xc7A45A1d083DaB3F0b8AdfdE9Bab4f8996851Ff0#code" title="Open github in a new tab" target="_blank">
            Flyweight Smart Contract
          </a>
        </li>
        <li>
          <a href="https://goerli.etherscan.io/address/0xf470a25eae45bcdb5bc4ba8e97b41bef4c6588c2#internaltx" title="Open github in a new tab" target="_blank">
            Token Whitelist Smart Contract
          </a>
        </li>
      </ul>
    </div>
  </>
);

export default SectionContributing;
