import { createContext, useReducer, ReactNode } from 'react';
import { Popular } from '../types/Popular';
import { Actions, reducer } from './reducer';

type PopularStore = {
  globalState: Popular;
  setGlobalState: React.Dispatch<Actions>;
};

const initialState: Popular = {
  popular: [],
};

const initialStore: PopularStore = {
  globalState: initialState,
  setGlobalState: () => null,
};

export const Store = createContext<PopularStore>(initialStore);

type Props = {
  children: ReactNode;
};

export const StoreProvider = (props: Props) => {
  const { children } = props;
  const [globalState, setGlobalState] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};
