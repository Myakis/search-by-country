import styled from 'styled-components';

export const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Input = styled.input.attrs({
  type: 'input',
  placeholder: 'Search for a country',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  width: 100%;
  background-color: var(--color-ui-base);
`;
