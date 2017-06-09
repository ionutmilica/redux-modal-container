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
          {
            id: action.id,
            props: action.props,
          },
          ...state.collection.filter(item => item.id !== action.id),
        ],
      };

    case MODAL_HIDE:
      return {
        ...state,
        collection: state.collection.filter(item => item.id !== action.id),
      };

    default:
      return state;
  }
}
