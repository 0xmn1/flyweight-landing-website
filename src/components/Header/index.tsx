import Button from '../Button';
import Container from 'react-bootstrap/Container';
import Logo from '../Logo';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Stack from 'react-bootstrap/Stack';
import styles from './Header.module.scss';

const Header = (props: unknown) => (
  <Navbar variant="dark" expand="lg" id={styles.wrapper}>
    <Container>
      <Navbar.Brand>
        <Stack direction="horizontal" gap={2}>
          <Logo />
          <div><b>Fly</b>weight</div>
        </Stack>
      </Navbar.Brand>
      <Stack direction="horizontal" gap={2}>
        <a href="https://flyweight.me/">
          <Button onClick={() => { }} className="primary">
            Launch App
          </Button>
        </a>
      </Stack>
    </Container>
  </Navbar>
);

export default Header;
