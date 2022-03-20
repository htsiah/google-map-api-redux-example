import logger from 'redux-logger';

const doNothing = (store) => (next) => (action) => {
  let result = next(action);
  return result;
};

/*
    Only enable logging on development envinronment
*/
export default process.env.REACT_APP_ENV === 'DEVELOPMENT' ? logger : doNothing;
