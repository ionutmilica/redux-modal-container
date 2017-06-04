import { MODAL_SHOW, MODAL_HIDE } from './constants';

export default function modalsReducer(state = {}, action) {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        current: action,
      };

    case MODAL_HIDE:
      return {};

    default:
      return state;
  }
}
