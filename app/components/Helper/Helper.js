import React from 'react'

export const saveLocalStorage = (key, values) => {
  var data = []
  data.push(values);
  localStorage.setItem(key, JSON.stringify(data));
  console.log(data)
}

export const getLocalStorage = (key) => {
  var test = localStorage.getItem(key);
  var data = JSON.parse(localStorage.getItem(key));
  if (typeof data !== 'undefined' && data !== null && typeof data[0] !== 'undefined') {
    return data[0];
  }
  return [];
};


export const getToken = () => {
  if (!_.isEmpty(getLocalStorage('loginDetails')))
    return getLocalStorage('loginDetail').token;

  return '';
};