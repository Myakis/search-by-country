import { FC, useEffect, useState } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './UI/Container';
import { HeaderEl, ModeSwitcher, Title, Wrapper } from './UI/Header';

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
