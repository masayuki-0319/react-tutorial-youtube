import axios from 'axios';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY as string;
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';
const client = axios.create({ baseURL: YOUTUBE_API_BASE_URL });

export const fetchPupularData = async () => {
  return await client.get('/videos', {
    params: {
      part: 'snippet',
      maxResults: 40,
      key: REACT_APP_API_KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular',
    },
  });
};
