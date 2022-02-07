import React from 'react';
import {SiNestjs} from 'react-icons/si'
import { Headerprops } from '../interfaces/items.interface';

const Header = ({handleOpenModal}:Headerprops):JSX.Element => {
  return <div className="nav-header">
      <div className="logo">
      <SiNestjs />
      <h3>NestJs</h3>
      </div>
      <div className="crud-header">
          <button className="create" onClick={handleOpenModal}>create Item</button>
      </div>
  </div>;
};

export default Header;
