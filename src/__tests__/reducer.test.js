import reducer from '../reducer';
import * as actionTypes from '../constants';

describe('Modal reducer', () => {
  describe('Initial state', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({ collection: [] });
    });
  });

  describe('MODAL_SHOW', () => {
    it('should handle MODAL_SHOW', () => {
      const newState = reducer(undefined, {
        type: actionTypes.MODAL_SHOW,
        id: 'MODAL_ID',
        props: { a: 1, b: 2 },
      });
      expect(newState).toEqual({
        collection: [{ id: 'MODAL_ID', props: { a: 1, b: 2 } }],
      });
    });

    it('should handle duplicate MODAL_SHOW calls', () => {
      const action = {
        type: actionTypes.MODAL_SHOW,
        id: 'MODAL_ID',
        props: { a: 1, b: 2 },
      };
      const newState = reducer(reducer(undefined, action), action);

      expect(newState).toEqual({
        collection: [{ id: 'MODAL_ID', props: { a: 1, b: 2 } }],
      });
    });

    it('should handle multiple MODAL_SHOW calls', () => {
      const action1 = {
        type: actionTypes.MODAL_SHOW,
        id: 'MODAL_ID_1',
        props: { a: 1, b: 2 },
      };
      const action2 = {
        type: actionTypes.MODAL_SHOW,
        id: 'MODAL_ID_2',
        props: { a: 1 },
      };
      const newState = reducer(reducer(undefined, action1), action2);

      expect(newState).toEqual({
        collection: [
          { id: 'MODAL_ID_2', props: { a: 1 } },
          { id: 'MODAL_ID_1', props: { a: 1, b: 2 } },
        ],
      });
    });
  });

  describe('MODAL_HIDE', () => {
    it('should handle MODAL_HIDE', () => {
      const showAction = {
        type: actionTypes.MODAL_SHOW,
        id: 'MODAL',
        props: { a: 1, b: 2 },
      };
      const hideAction = {
        type: actionTypes.MODAL_HIDE,
        id: 'MODAL',
      };
      const newState = reducer(reducer(undefined, showAction), hideAction);
      expect(newState).toEqual({ collection: [] });
    });

    it('should handle MODAL_HIDE when modal id is invalid', () => {
      const showAction = {
        type: actionTypes.MODAL_SHOW,
        id: 'MODAL',
        props: { a: 1, b: 2 },
      };
      const hideAction = {
        type: actionTypes.MODAL_HIDE,
        id: 'MODAL2',
      };
      const newState = reducer(reducer(undefined, showAction), hideAction);
      expect(newState).toEqual({
        collection: [{ id: 'MODAL', props: { a: 1, b: 2 } }],
      });
    });
  });
});
