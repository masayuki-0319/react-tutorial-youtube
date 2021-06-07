import { Popular, Video } from '../types/Popular';

const SET_POPULAR = 'SET_POPULAR' as const;
const setPupular = (popular: Video[]) => ({
  type: SET_POPULAR,
  payload: {
    popular: popular,
  },
});

const SET_RELATED = 'SET_RELATED' as const;
const setRelated = (related: Video[]) => ({
  type: SET_RELATED,
  payload: {
    related: related,
  },
});

const SET_SELECTED = 'SET_SELECTED' as const;
const setSelected = (video: Video) => ({
  type: SET_SELECTED,
  payload: {
    selected: video,
  },
});

export type Actions =
  | ReturnType<typeof setPupular>
  | ReturnType<typeof setSelected>
  | ReturnType<typeof setRelated>;

export const reducer = (state: Popular, action: Actions) => {
  switch (action.type) {
    case SET_POPULAR:
      return { ...state, popular: action.payload.popular };
    case SET_RELATED:
      return { ...state, related: action.payload.related };
    case SET_SELECTED:
      return { ...state, selected: action.payload.selected };
    default:
      return state;
  }
};
