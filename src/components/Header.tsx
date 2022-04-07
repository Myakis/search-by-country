import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--color-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--color-text);
  font-size: var(--fz-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  cursor: pointer;
  font-size: var(--fz-sm);
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

const Header: FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
            <span style={{ marginLeft: '.3rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
