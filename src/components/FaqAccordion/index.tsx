import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import styles from './FaqAccordion.module.scss';

const Faq = () => (
  <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>What is an ethereum transaction?</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
          Simply put, a transaction is just an action that changes state on the Ethereum network. In the context of Flyweight, this means:
        </p>
        <ul>
          <li>
            Order <strong>creation</strong> involves 2 transactions. These gas fees are paid by the user.
          </li>
          <li>
            Order <strong>execution</strong> also involves 1 transaction per execution, however the gas for that is paid out of the <em>treasury</em> &amp; not the user.
          </li>
          <li>
            Order <strong>cancellation</strong> involves 1 transaction to send the deposited erc20&lsquo;s from the smart contract, to the order owner&lsquo;s wallet. This gas fee is paid by the user.
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>How are orders added in the smart contract?</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
          Order creation involves 2 transactions:
        </p>
        <ul>
          <li>
            One to add the <strong>order details</strong> into the smart contract. This includes data such as the order owner&lsquo;s address, token to swap &amp; amount to swap.
          </li>
          <li>
            One to <strong>deposit</strong> the erc20&lsquo;s into the smart contract, for a relevant order.
          </li>
        </ul>
        <p>
          After the 2nd transaction is confirmed on-chain, the order status in the smart contract is updated so that it is ready to be executed (when the order price condition is met).
        </p>
        <p>
          Order owner is identified using msg.sender, &amp; the account must be an <a href="https://ethereum.org/en/developers/docs/accounts/#types-of-account" title="Opens EOA definition page in a new tab" target="_blank">EOA</a>.
        </p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Why does creating an order involve 2 ethereum transactions instead of 1?</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
          State-changing actions &amp; ERC20&lsquo;s <a href="https://github.com/ethereum/EIPs/issues/677" title="Opens EIP-677 in a new tab" target="_blank">cannot be bundled in the same transaction (yet)</a>.
        </p>
        <ul>
          <li>
            Ideally, Ethereum would allow a smart contract function to be called after receiving an ERC20 transfer.
          </li>
          <li>
            The solidity <a href="https://docs.soliditylang.org/en/v0.8.17/contracts.html#receive-ether-function" title="Opens solidity lang docs in a new tab" target="_blank">receive function</a> only activates for ETH transfers, not ERC20&lsquo;s.
          </li>
          <li>
            Most products in the Ethereum ecosystem simply ask for unlimited token approval on a user&lsquo;s wallet, then execute the transfer inside of the smart contract (instead of the user initiating the transfer themselves). Flyweight is intentionally designed to not do this, hence the 2nd transaction when creating a new order.
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>How does the smart contract implement self-custody of coins?</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
          Coins deposited into any Ethereum smart contract will be in the contract&lsquo;s custody.
        </p>
        <p>
          The Flyweight smart contracts intentionally <em>do not</em> contain an admin withdraw function or proxy contract.
        </p>
        <p>
          Flyweight gives users options to re-gain coin custody easily.
          The transfer instruction is executed inside the of the smart contract in 2 use cases:
        </p>
        <ul>
          <li>
            When users <strong>cancel new/untriggered orders</strong>, which refunds their coins from the smart contract to their account.
          </li>
          <li>
            When an <strong>order is executed</strong>, which immediately sends the resulting coins to the order owners&lsquo; account.
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>My order is live, what now?</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
          At this stage, the deposit to the smart contract has been verified &amp; the order is &quot;ready to execute&quot;.
        </p>
        <p>
          Once the order&lsquo;s price condition is met, the order will automatically swap & immediately send the resulting coin&lsquo;s to your account.
        </p>
        <p>
          Until then, you can also cancel your new/untriggered order to get the deposited ERC20 sent back to your account.
        </p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
      <Accordion.Header>How does Flyweight read the Ethereum blockchain?</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
          <a href="https://github.com/0xmn1/flyweight-lambdas/tree/main/src/deposits-oracle-node" title="Opens github in a new tab" target="_blank">One of the Flyweight oracles</a> uses the Etherscan API to fetch on-chain ethereum transactions.
        </p>
        <p>
          Thus the Flyweight platform has a dependency on <a href="https://docs.etherscan.io/" title="Opens etherscan api docs in a new tab" target="_blank">Etherscan</a> to verify on-chain ERC20 deposits to the smart contract.
        </p>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="6">
      <Accordion.Header>How does Flyweight verify on-chain deposits to the smart contract?</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
          Transactions are fetched from Etherscan &amp; are then compared against the orders in the smart contract that are pending deposit.
        </p>
        <ul>
          <li>
            The criteria for a verified erc20 deposit to the Flyweight contract is strict (<a href="https://github.com/0xmn1/flyweight-lambdas/blob/43d27460a4f9dd7a18e93b27d1eb46c9722e8872/src/deposits-oracle-node/classes/DepositOracleNode.ts#L160" title="Opens github in a new tab" target="_blank">code reference</a>).
          </li>
          <li>
            In the event of a 51% ethereum chain attack, the Flyweight platform <strong>still remains in the correct state</strong>, due to the order status update occurring in a separate block that is <em>after</em> the block containing the on-chain deposit transaction.
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="7">
      <Accordion.Header>Is there a &quot;Flyweight&quot; token i can purchase / speculate on?</Accordion.Header>
      <Accordion.Body className="text-start">
        <p>
          No.
        </p>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default Faq;
