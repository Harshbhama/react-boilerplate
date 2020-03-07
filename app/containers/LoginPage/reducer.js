/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME, ON_CALL_UPLOAD, ON_LOGIN_SUBMIT } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  uploadData: '',
  loginData: ''
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
        draft.uploadData = action.uploadData
        break;
    
      case ON_LOGIN_SUBMIT:
        draft.loginData = action.loginData
        break;
    }
  });

export default landingReducer;
