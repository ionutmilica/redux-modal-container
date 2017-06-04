import { MODAL_SHOW, MODAL_HIDE } from './constants';

export const showModal = (id, component, props = {}) => ({
  type: MODAL_SHOW,
  id,
  component,
  props,
});

export const hideModal = id => ({
  type: MODAL_HIDE,
  id,
});
