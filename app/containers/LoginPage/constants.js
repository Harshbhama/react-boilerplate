/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const ON_CALL_UPLOAD = 'boilerplate/Login/ON_CALL_UPLOAD';
export const ON_LOGIN_SUBMIT = 'boilerplate/Login/ON_LOGIN_SUBMIT';
export const ON_AUTH = 'boilerplate/Login/ON_AUTH'
