import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  control: (provided: []) => ({
    ...provided,
    borderRadius: `var(--border-radius)`,
    padding: `0.25rem`,
    border: `none`,
    boxShadow: `var(--shadow)`,
    height: `500px`,
  }),
  option: (provided: [], state: any) => ({
    ...provided,
    cursor: `pointer`,
    color: `var(--color-text) `,
    backgroundColor: state.isSelected ? `var(--color-bg)` : `var(--color-ui-base)`,
  }),
})`
  width: 200px;
  border-radius: var(--border-radius);
  font-family: var(--family);
  border: none;
  & .Select-placeholder {
    font-size: 60px !important;
  }
  & > * {
    box-shadow: var(--shadow) !important;
    background-color: var(--color-ui-base) !important;
  }
  & * {
    color: var(--color-text) !important;
  }
`;
