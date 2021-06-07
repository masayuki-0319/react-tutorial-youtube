import { VFC, useContext, useEffect } from 'react';
import { Store } from '../../store/index';
import { fetchRelatedData } from '../../apis/index';
import { SideListItem } from '../SideListItem/SideListItem';
import Style from './SideList.module.scss';

export const SideList: VFC = () => {
  const { globalState, setGlobalState } = useContext(Store);

  const setRelateVideo = async (id: string) => {
    await fetchRelatedData(id).then((res: any) => {
      setGlobalState({
        type: 'SET_RELATED',
        payload: { related: res.data.items },
      });
    });
  };

  useEffect(() => {
    setRelateVideo(globalState.selected?.id.videoId as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.selected?.id]);

  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video, index) => {
          if (video.snippet === undefined) {
            console.log(video);
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
