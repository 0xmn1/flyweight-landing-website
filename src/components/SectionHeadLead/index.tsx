import Button from '../Button';
import React from 'react';

const SectionHeadLead = () => (
  <>
    <h1>
      The Flyweight DAPP adds price-triggerable orders for Uniswap v3 LP pools.
    </h1>
    <div className="my-md-4"></div>
    <div className="mb-4 mb-md-0">
      <a href="flyweight-whitepaper.pdf" title="Open flyweight whitepaper pdf in a new browser tab" target="_blank">
        <Button className="primary">
          View whitepaper
        </Button>
      </a>
    </div>
  </>
);

export default SectionHeadLead;
