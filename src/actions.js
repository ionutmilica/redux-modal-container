import { MODAL_SHOW, MODAL_HIDE } from './constants';

export const showModal = (id, props = {}) => ({
  type: MODAL_SHOW,
  id,
  props,
});

export const hideModal = id => ({
  type: MODAL_HIDE,
  id,
});
