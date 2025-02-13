import { PROMISE_TYPE, getPromise } from './reusablePromise';
const taskRunnerIterative = async (tasks, cb) => {
  const result = [];
  const error = [];
  for (let task of tasks) {
    try {
      // Use `await` to wait for the promise resolution
      const successTask = await task;
      result.push(successTask);
    } catch (e) {
      error.push(e);
    }
  }
  cb(result, error);
};

taskRunnerIterative(
  [
    getPromise(PROMISE_TYPE.RESOLVED_IMMEDIATE),
    getPromise(PROMISE_TYPE.REJECTED_IMMEDIATE),
    getPromise(PROMISE_TYPE.DELAYED_RESOLVED),
    getPromise(),
  ],
  (data, error) => console.log('Result:', data, 'Errors:', error)
);

const runTask = async (index, tasks, cb, result, error) => {
  try {
    const value = await tasks[index];
    result.push(value);
  } catch (err) {
    error.push(err);
  } finally {
    if (index === tasks.length - 1) {
      cb(result, error);
      return;
    }
    runTask(index + 1, tasks, cb, result, error);
  }
};
const taskRunnerRecursive = async (tasks, cb) => {
  const result = [];
  const error = [];
  runTask(0, tasks, cb, result, error);
};

taskRunnerRecursive(
  [
    getPromise(PROMISE_TYPE.RESOLVED_IMMEDIATE),
    getPromise(PROMISE_TYPE.REJECTED_IMMEDIATE),
    getPromise(PROMISE_TYPE.DELAYED_RESOLVED),
    getPromise(),
  ],
  (data, error) => console.log('Result:', data, 'Errors:', error)
);
