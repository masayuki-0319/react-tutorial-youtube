import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Style from './Header.module.scss';

export const Header: VFC = () => {
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to='/'>VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form>
          <input type='text' placeholder='検索' />
          <button type='submit'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};
