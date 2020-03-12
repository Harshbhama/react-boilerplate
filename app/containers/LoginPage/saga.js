/**
 * Gets the repositories of the user from Github
 */

import { call,fork, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import axios from 'axios';
import { saveLocalStorage, getToken } from 'components/Helper/Helper';
import { push } from 'connected-react-router';
import { CHANGE_USERNAME, ON_CALL_UPLOAD, ON_LOGIN_SUBMIT } from './constants';
import { onAuth } from 'containers/LoginPage/actions'


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

export function* getData(value){
  // axios({
  //   method: 'post',
  //   url: 'http://localhost:4000/user/authenticate',
  //   data: value.loginData,
  // })
  //   // value.history.push('/landing')
  //   .then(response => {

  //     console.log('response ', response);
  //     if (
  //       !_.isEmpty(response) &&
  //       typeof response.data !== 'undefined' &&
  //       !_.isEmpty(response.data) &&
  //       response.data.error !== 1
  //     ) {
  //     return(response);

  //     } else if (response.data.error === 1) {
  //      throw(response.data)
  //     }
  //   })
  const requestURL = 'http://localhost:4000/user/authenticate'
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL,{
    method: 'post',
    data: value.loginData,
    });
    // yield put(reposLoaded(repos, username));
  } catch (err) {
    console.log(err)
    // yield put(repoLoadingError(err));
  }

}

export function* onLoginSubmit(value) {
  console.log(value.loginData);
  console.log(value.history);
  // axios({
  //   method: 'post',
  //   url: 'http://localhost:4000/user/authenticate',
  //   data: value.loginData,
  // })
  //   // value.history.push('/landing')
  //   .then(response => {

  //     console.log('response ', response);
  //     if (
  //       !_.isEmpty(response) &&
  //       typeof response.data !== 'undefined' &&
  //       !_.isEmpty(response.data) &&
  //       response.data.error !== 1
  //     ) {
  //       const loginDetails = {
  //         token: response.data.token,
  //       };
  //       saveLocalStorage('loginDetails', loginDetails);
  //       // yield put(onAuth(true));

  //     } else if (response.data.error === 1) {
  //       console.log(response.data.data);
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  // const requestURL = 'http://localhost:4000/user/authenticate'
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const repos = yield call(request, requestURL,{
  //   method: 'post',
  //   data: value.loginData,
  //   });
  
  //   console.log(repos);
  //   yield put(onAuth(true))
  //       if (
  //       !_.isEmpty(repos) &&
  //       typeof repos.data !== 'undefined' &&
  //       !_.isEmpty(repos.data) &&
  //       repos.data.error !== 1
  //     ) {
  //   yield put(onAuth(true));}
  // } catch (err) {
  //   console.log(err)

  //   // yield put(repoLoadingError(err));
  // }


  const requestURL = `https://api.github.com/users/harshbhama/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    console.log(repos)
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }







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
