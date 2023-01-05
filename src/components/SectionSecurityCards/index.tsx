import { ClipboardCheck, FileEarmarkLock, Github, Key, Layers, SuitDiamond, Wallet2, Water } from 'react-bootstrap-icons';

import React from 'react';
import SectionSecurityCard from '../SectionSecurityCard';
import styles from './SectionSecurityCards.module.scss';

const SectionSecurityCards = () => (
  <>
    <SectionSecurityCard icon={<Layers />}>
      The Flyweight platform intentionally doesn&lsquo;t utilize <strong>proxy contracts</strong>, which is a measure often taken by developers to improve maintainability. It is also unfortunately used as a loophole by malicious &quot;developers&quot; to rug. E.g.: <a href="https://twitter.com/Slappjakke/status/1609147454745624578" target="_blank" title="Opens twitter thread on dictum rug in a new tab">dictum</a>.
    </SectionSecurityCard>
    <SectionSecurityCard icon={<Wallet2 />}>
      The Flyweight smart contract allows users to cancel their new/untriggered orders. This allows them to get their <strong>funds sent back</strong> directly into their wallet (self custody). The Flyweight front-end also has a button for this, so that users dont have to manually create the contract call transaction.
    </SectionSecurityCard>
    <SectionSecurityCard icon={<Github />}>
      100% of flyweight is <strong>open source</strong>.
    </SectionSecurityCard>
    <SectionSecurityCard icon={<Key />}>
      Deposited ERC20's are in custody of the smart contract, not an EOA wallet. The smart contract has <strong>no admin or withdraw function</strong> built-in.
    </SectionSecurityCard>
    <SectionSecurityCard icon={<Water />}>
      Flyweight only supports ERC20's that are expected to remain <strong>highly liquid</strong> going into the future (including the bear market). Whilst not necessary, this helps protects users against uniswap slippage with "long-tail risk" coins. This helps users minimise exposure to unexpectedly liquidity shortfalls such as LUNA, FTT or SOL.
    </SectionSecurityCard>
    <SectionSecurityCard icon={<SuitDiamond />}>
      Flyweight is only launched on <strong>Ethereum</strong> & not on other L1's such as BSC, Solana etc. This is because the developer believes that Ethereum is the only trustworthy L1 smart-contract platform from a decentralisation perspective (even considering the OFAC compliance), with others being highly centralised.
    </SectionSecurityCard>
    <SectionSecurityCard icon={<FileEarmarkLock />}>
      There is <strong>no DAO</strong>, thus making protocol changes/political coups impossible.
    </SectionSecurityCard>
    <SectionSecurityCard icon={<ClipboardCheck />}>
      Contracts are <strong>verified</strong> on <a href="https://goerli.etherscan.io/address/0xc7A45A1d083DaB3F0b8AdfdE9Bab4f8996851Ff0#code" target="_blank" title="Opens etherscan in a new tab">Etherscan</a>.
    </SectionSecurityCard>
  </>
);

export default SectionSecurityCards;
