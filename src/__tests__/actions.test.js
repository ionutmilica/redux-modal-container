import * as actionTypes from '../constants';
import * as actions from '../actions';

describe('actions', () => {
  describe('MODAL_SHOW', () => {
    it('should create an action to show a modal', () => {
      const expectedAction = {
        type: actionTypes.MODAL_SHOW,
        id: 'modal',
        props: { a: 1, b: 2 },
      };
      expect(actions.showModal('modal', { a: 1, b: 2 })).toEqual(expectedAction);
    });
  });

  describe('MODAL_SHOW', () => {
    it('should create an action to hide a modal', () => {
      const expectedAction = {
        type: actionTypes.MODAL_HIDE,
        id: 'modal',
      };
      expect(actions.hideModal('modal')).toEqual(expectedAction);
    });
  });
});
