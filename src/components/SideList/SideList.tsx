import { VFC, useContext } from 'react';
import { Store } from '../../store/index';
import { SideListItem } from '../SideListItem/SideListItem';
import Style from './SideList.module.scss';

export const SideList: VFC = () => {
  const { globalState } = useContext(Store);

  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video, index) => {
          if (video.snippet === undefined) {
            console.log('Error Video:', video);
            return <div key={index}>No Data</div>;
          }
          return <SideListItem key={index} video={video} />;
        })
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};
