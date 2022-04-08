import { FC } from 'react';

import { Container } from './UI/Container';
import { Wrapper } from './UI/Main';

const Main: FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
