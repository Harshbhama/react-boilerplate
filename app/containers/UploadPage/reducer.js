/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME, ON_CALL_UPLOAD } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  uploadData: '',
};

/* eslint-disable default-case, no-param-reassign */
const landingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;

      case ON_CALL_UPLOAD:
        draft.uploadData = action.uploadData;
        break;
    }
  });

export default landingReducer;
