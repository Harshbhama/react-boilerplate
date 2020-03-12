/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import axios from 'axios';

import { CHANGE_USERNAME, ON_CALL_UPLOAD, ON_LOGIN_SUBMIT, ON_AUTH } from './constants';

import { saveLocalStorage, getToken } from 'components/Helper/Helper';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function onCallUpload(payload) {
  return {
    type: ON_CALL_UPLOAD,
    uploadData: payload,
  };
}
// export function onLoginSubmit(values, history) {
//   return {
//     type: ON_LOGIN_SUBMIT,
//     loginData: values,
//     history: history
//   };
// }

export function onAuth(value) {
  return {
    type: ON_AUTH,
    auth: value
  }
}

export const onLoginSubmit = (values, history) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'http://localhost:4000/user/authenticate',
        data: values,
      })
        // value.history.push('/landing')
        .then(response => {

          console.log('response ', response);
          if (
            !_.isEmpty(response) &&
            typeof response.data !== 'undefined' &&
            !_.isEmpty(response.data) &&
            response.data.error !== 1
          ) {
            const loginDetails = {
              token: response.data.token,
            };
            saveLocalStorage('loginDetails', loginDetails);
            history.push('/landing')
            dispatch(onAuth(true))
            // yield put(onAuth(true));

          } else if (response.data.error === 1) {
            console.log(response.data.data);
          }
          resolve(true);
        })
        .catch(error => {
          console.log(error);
          reject(true)
        });
    });
  }
}
