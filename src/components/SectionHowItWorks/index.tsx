import DiagramOrderCancellation from '../DiagramOrderCancellation';
import DiagramOrderCreation from '../DiagramOrderCreation';
import DiagramOrderExecution from '../DiagramOrderExecution';
import React from 'react';

const SectionHowItWorks = () => (
  <>
    <h2>
      How does Flyweight work?
    </h2>
    <p>
      The Flyweight platform supports 3 primary use cases for managing price-triggered orders:
      <br />
      order <strong>creation</strong>, <strong>execution</strong> &amp; <strong>cancellation</strong>.
    </p>
    <DiagramOrderCreation />
    <DiagramOrderExecution />
    <DiagramOrderCancellation />
  </>
);

export default SectionHowItWorks;
