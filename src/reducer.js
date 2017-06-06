import { MODAL_SHOW, MODAL_HIDE } from './constants';

export const initialState = {
  collection: [],
};

export default function modalsReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        collection: [
          action,
          ...state.collection.filter(item => item.id !== action.id),
        ],
      };

    case MODAL_HIDE:
      return {
        ...state,
        collection: state.collection.slice(1),
      };

    default:
      return state;
  }
}
