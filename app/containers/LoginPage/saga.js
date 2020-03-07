/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import axios from 'axios';
import { saveLocalStorage, getToken } from 'components/Helper/Helper';
import { push } from 'connected-react-router';
import { CHANGE_USERNAME, ON_CALL_UPLOAD, ON_LOGIN_SUBMIT } from './constants';
// import { onLoginSubmit } from './actions';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* callUpload(data) {
  console.log('in Call Upload');
  // Select username from store
  axios({
    method: 'post',
    url: 'http://localhost:4000/gst/upload',
    data: data.uploadData,
    headers: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE1ODMzMDMzNjUsImV4cCI6MTU4MzMxNzc2NX0._MivpZKvH7sRzbHD6aZ8RGM8qNJ5cEPwTt2NTEONqqQ',
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => {
      console.log('response ', response);
    })
    .catch(error => {
      console.log(error);
    });
}

export function* onLoginSubmit(data) {
  console.log(data.loginData);

  axios({
    method: 'post',
    url: 'http://localhost:4000/user/authenticate',
    data: data.loginData,
  })
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
      } else if (response.data.error === 1) {
        console.log(response.data.data);
      }
    })
    .catch(error => {
      console.log(error);
    });
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(ON_CALL_UPLOAD, callUpload);
  yield takeLatest(ON_LOGIN_SUBMIT, onLoginSubmit);
}
