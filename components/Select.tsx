import { FC } from 'react';
import styled from 'styled-components';

const CustomSelect = styled.select`
  padding: 15px 11px;
  background-color: #101c2b;
  color: #ae8de5;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Select: FC = () => {
  return (
    <CustomSelect>
      <option value='RU'>RU</option>
      <option value='EN'>EN</option>
    </CustomSelect>
  );
};

export default Select;
