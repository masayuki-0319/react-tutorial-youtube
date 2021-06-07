import axios from 'axios';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY as string;
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';
const client = axios.create({ baseURL: YOUTUBE_API_BASE_URL });

const params = {
  part: 'snippet',
  maxResults: 40,
  key: REACT_APP_API_KEY,
  regionCode: 'JP',
  type: 'video',
};

export const fetchPupularData = async () => {
  return await client.get('/videos', {
    params: {
      chart: 'mostPopular',
      ...params,
    },
  });
};

export const fetchRelatedData = async (id: string) => {
  return await client.get('/search', {
    params: {
      relatedToVideoId: id,
      ...params,
    },
  });
};

export const fetchSelectedData = async (id: string) => {
  return await client.get('/videos', {
    params: {
      id: id,
      ...params,
    },
  });
};

export const fetchSearchData = async (query: string) => {
  return await client.get('/search', {
    params: {
      q: query,
      ...params,
    },
  });
};
