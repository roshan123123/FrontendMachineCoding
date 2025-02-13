const createAsyncTask = () => {
  return new Promise((resolve, reject) => {
    const randomVal = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (randomVal > 5) {
        resolve('ASYNC reolved within ' + randomVal);
      } else {
        reject('ASYNC Rejected within ' + randomVal);
      }
    }, randomVal * 100);
  });
};

const PROMISE_TYPE = {
  RESOLVED_IMMEDIATE: 'RESOLVED',
  REJECTED_IMMEDIATE: 'REJECTED',
  DELAYED_RESOLVED: 'DELAYED_RESOLVED',
  DELAYED_REJECTED: 'DELAYED_REJECTED',
};

function getPromise(type) {
  if (type === PROMISE_TYPE.RESOLVED_IMMEDIATE)
    return Promise.resolve('Resolved Immediately');
  if (type === PROMISE_TYPE.REJECTED_IMMEDIATE)
    return Promise.reject('Rejected Immediately');
  if (type === PROMISE_TYPE.DELAYED_RESOLVED) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Reolved after delay');
      }, 3000);
    });
  }
  if (type === PROMISE_TYPE.DELAYED_REJECTED) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject('rejected after delay');
      }, 3000);
    });
  }
  //default return
  return Promise.resolve('Default resolved');
}

export { createAsyncTask, getPromise, PROMISE_TYPE };
