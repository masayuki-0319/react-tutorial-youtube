import React, { useState, VFC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Style from './Header.module.scss';
import { useContext, useEffect } from 'react';
import { Store } from '../../store/index';

export const Header: VFC = () => {
  const [term, setTerm] = useState('');
  const { globalState, setGlobalState } = useContext(Store);

  const history = useHistory();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGlobalState({ type: 'SET_TERM', payload: { term: term } });

    history.push(`/search?query=${term}`);
  };

  useEffect(() => {
    setTerm(globalState.term);
  }, [globalState.term]);

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to='/'>VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='検索'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type='submit'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};
