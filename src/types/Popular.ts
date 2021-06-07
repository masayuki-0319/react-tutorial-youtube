export type Video = {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      standard: {
        url: string;
      };
      medium: {
        url: string;
      };
    };
  };
  title: string;
  [k: string]: string | object | number;
};

export type Popular = {
  popular: Video[];
  related: Video[];
  selected: Video | null;
  term: string;
  searched: Video[];
};
