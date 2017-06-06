import { MODAL_SHOW, MODAL_HIDE, MODAL_REMOVE } from './constants';

export const showModal = (id, props = {}) => ({
  type: MODAL_SHOW,
  id,
  props,
});

export const hideModal = id => ({
  type: MODAL_HIDE,
  id,
});

export const removeModal = id => ({
  type: MODAL_REMOVE,
  id,
});
