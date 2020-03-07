/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import landingReducer from 'containers/LandingPage/reducer';
import uploadReducer from 'containers/UploadPage/reducer';
import { reducer as formReducer } from 'redux-form';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form: formReducer,
    global: globalReducer,
    language: languageProviderReducer,
    landingReducer,
    uploadReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
