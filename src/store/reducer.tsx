import { Popular } from '../types/Popular';

const SET_POPULAR = 'SET_POPULAR' as const;

const setPupular = (popular: Popular) => ({
  type: SET_POPULAR,
  payload: popular,
});

export type Actions = ReturnType<typeof setPupular>;

export const reducer = (state: Popular, action: Actions) => {
  switch (action.type) {
    case SET_POPULAR:
      return { popular: action.payload.popular };
    default:
      return state;
  }
};
