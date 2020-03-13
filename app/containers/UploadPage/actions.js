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

import { CHANGE_USERNAME, ON_CALL_UPLOAD } from './constants';
import { saveLocalStorage, getToken, getLocalStorage } from 'components/Helper/Helper';
import axios from 'axios';


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

export const onCallUpload = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'http://localhost:4000/gst/upload',
        data: data,
        headers: {
          token: (getLocalStorage('loginDetails')),
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          console.log('response ', response);
          resolve(true)
        })
        .catch(error => {
          console.log(error);
          reject(true)
        });
    });
  }
}