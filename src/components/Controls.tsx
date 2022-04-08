import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { IOptionsItemSelect } from '../types';
import { CustomSelect } from './CustomSelect';
import Search from './Search';

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

interface ISearch {
  onSearch: (search: string, region: string) => void;
}

const options: Array<IOptionsItemSelect> = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Controls: FC<ISearch> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<any>('');

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSelectHandler = (newValue: any) => {
    setRegion(newValue);
  };

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} onChangeValue={onChangeValue} />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region}
        onChange={onSelectHandler}
      />
    </Wrapper>
  );
};

export default Controls;
