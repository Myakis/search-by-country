import React, { FC } from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { Input, InputContainer } from './UI/Searcj';

interface ISearchProps {
  search: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<ISearchProps> = ({ onChangeValue, search }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={onChangeValue} value={search} />
    </InputContainer>
  );
};

export default Search;
