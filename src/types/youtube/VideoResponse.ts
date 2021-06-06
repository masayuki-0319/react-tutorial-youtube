import { Video } from '../Popular';

export type VideoResponse = {
  data: {
    items: Video[];
  };
};
