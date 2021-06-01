import { ReactNode, VFC } from 'react';
import { Header } from '../Header/Header';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
