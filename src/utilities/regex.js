import React from 'react';

const Regex = {

  isPassword(password) {
    let reqMet = false;
    let capLetter = false;
    let oneNum = false;
    const arr = password.split('');
    arr.forEach((char) => {
      if (!isNaN(parseInt(char, 10))) {
        oneNum = true;
      } else if (char === char.toUpperCase()) {
        capLetter = true;
      }
    });
    if (capLetter && oneNum && arr.length > 6) {
      reqMet = true;
    }
    return reqMet;
  },

  isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  isNumber(character) {
    const re = /^[0-9\b]+$/;
    return re.test(character);
  },

};

export default Regex;
