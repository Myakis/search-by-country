import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--color-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fz-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const ModeSwitcher = styled.div`
  cursor: pointer;
  font-size: var(--fz-sm);
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;
