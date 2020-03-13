import React from 'react';

export const saveLocalStorage = (key, values) => {
  const data = [];
  data.push(values);
  localStorage.setItem(key, JSON.stringify(data));
  console.log(data);
};

export const getLocalStorage = key => {
  const test = localStorage.getItem(key);
  const data = JSON.parse(localStorage.getItem(key));
  if (
    typeof data !== 'undefined' &&
    data !== null &&
    typeof data[0] !== 'undefined'
  ) {
    return data[0].token;
  }
  return [];
};

export const getToken = () => {
  if (!_.isEmpty(getLocalStorage('loginDetails')))
    return getLocalStorage('loginDetail').token;

  return '';
};
