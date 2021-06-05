// TODO: API の JSON Schema が必要
export type Video = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      standard: {
        url: string;
      };
    };
  };
  title: string;
  [k: string]: string | object | number;
};

export type Popular = {
  popular: Video[];
};
