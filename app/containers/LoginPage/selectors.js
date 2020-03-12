/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState, auth } from './reducer';

const selectHome = state => state.login || initialState || auth;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

  const makeAuth = () =>
  createSelector(
    selectHome,
    homeState => homeState.auth,
  );

export { selectHome, makeSelectUsername, makeAuth };
