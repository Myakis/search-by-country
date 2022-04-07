import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { CustomSelect } from './CustomSelect';
import Search from './Search';

interface IOptionsItemSelect {
  value: string;
  label: string;
}

const options: Array<IOptionsItemSelect> = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europa', label: 'Europa' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState('');

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Search search={search} onChangeValue={onChangeValue} />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region}
      />
    </Wrapper>
  );
};

export default Controls;
