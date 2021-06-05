import Style from './VideoGrid.module.scss';
import { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const VideoGrid: VFC<Props> = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};
