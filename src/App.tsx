'use strict';

import './App.css';
import './flyweight-theme.scss';

import Button from './components/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DiagramOrderCancellation from './components/DiagramOrderCancellation';
import DiagramOrderCreation from './components/DiagramOrderCreation';
import DiagramOrderExecution from './components/DiagramOrderExecution';
import Header from './components/Header';
import Logo from './components/Logo';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import WelcomeCard from './components/WelcomeCard';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import watch from 'redux-watch';

type Props = {};

type State = {
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
    };
  }

  async componentDidMount() {
  }

  render() {
    return (
      <>
        <Header />
        <Container fluid>
          <Row className="wrapper-section">
            <Col xs={12} lg={6} className="px-5">
              <h1>
                Flyweight is a DAPP that allows web3 users to execute price-triggered orders via Uniswap v3 liquidity pools.
              </h1>
              <Button className="primary">
                View whitepaper
              </Button>
            </Col>
            <Col xs={12} lg={6} className="px-5">
              <h2>
                What crypto problem does Flyweight solve?
              </h2>
              <p>
                Currently, trigger-based orders are only supported on CEX or a DEX that requires unlimited token approvals for a wallet. Some platforms even require KYC due to their "decentralized" nature.
              </p>
              <p>
                Unfortunately, current CEX have trust issues, primarily caused by the FTX debacle. Crypto projects are also known for rugs & hacks.
              </p>
              <p>
                Uniswap currently does not support trigger-based orders. They currently suggest a suboptimal alternative of setting LP ranges. This is not a "true" trigger-based order, because the trade "unswaps" itself if the price reverses above/below the LP price.
              </p>
            </Col>
          </Row>
          <Row className="mt-4 flex-column justify-content-center wrapper-section">
            <Col xs={12} className="text-center">
              <h2>
                How does Flyweight work?
              </h2>
            </Col>
            <Col xs={12} className="d-flex justify-content-around flex-wrap mt-4">
              <DiagramOrderCreation />
              <DiagramOrderExecution />
            </Col>
            <Col xs={12} className="d-flex justify-content-around flex-wrap mt-5">
              <DiagramOrderCancellation />
            </Col>
          </Row>
          <Row className="mt-4 flex-column justify-content-center wrapper-section wrapper-security">
            <Col xs={12} className="text-center">
              <h2>
                Security aspects upheld by Flyweight?
              </h2>
            </Col>
            <Col xs={12} className="d-flex mt-4 px-5">
              <ul>
                <li>
                  Smart contracts are immutable (no proxy contract - no rugging, e.g.: dictum exchange).
                </li>
                <li>
                  Smart contract allows users to cancel new/untriggered orders & get their funds sent directly into their wallet (self custody). UI makes this easier for users via a button.
                </li>
                <li>
                  Supported ERC20's are verified against their contract address, in addition to their token symbol. Whilst not necessary, this helps protect users against accidentally creating orders for unintended tokens that have the same symbol, but a different contract address.
                </li>
              </ul>
              <ul>
                <li>
                  Deposited ERC20's are in custody of the smart contract, not an EOA wallet. The smart contract has no "admin" or "withdraw" function built-in.
                </li>
                <li>
                  Flyweight only supports ERC20's that are expected to remain highly liquid going into the future (including the bear market). Whilst not necessary, this helps protects users against uniswap slippage with "long-tail risk" coins.
                </li>
                <li>
                  If a contract change is required, a new contract needs to be deployed for flyweight. This is an advantage from a user perspective, & a downside from a developer perspective. This is an intentional decision by the DAPP developer.
                </li>
              </ul>
              <ul>
                <li>
                  100% of flyweight is open source.
                </li>
                <li>
                  Flyweight is only launched on Ethereum & not on other L1's such as BSC, Solana etc. This is because the developer believes that Ethereum is the only trustworthy L1 smart-contract platform from a decentralisation perspective (even considering the OFAC compliance), with others being highly centralised.
                </li>
                <li>
                  There is no DAO, thus making protocol changes/political coups impossible.
                </li>
                <li>
                  Contracts are verified on Etherscan.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-4 flex-column justify-content-center wrapper-section">
            <Col xs={12} className="d-flex justify-content-center">
              <h2>Contributing</h2>
            </Col>
            <Col xs={12} className="d-flex justify-content-center mt-4">
              <div>
                <a href="https://github.com/0xmn1?tab=repositories&q=flyweight-&type=&language=&sort=" title="Open github projects in a new tab">
                  <Button className="primary">
                    View source code on Github
                  </Button>
                </a>
                <a href="https://goerli.etherscan.io/address/0xc7A45A1d083DaB3F0b8AdfdE9Bab4f8996851Ff0#code" title="Open etherscan flyweight smart contracts in a new tab">
                  <Button className="primary">
                    View verified contracts on Etherscan
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
