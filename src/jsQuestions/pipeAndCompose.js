const fun1 = (arg) => {
  return arg + 'fun1';
};

const fun2 = (arg) => {
  return arg + 'fun2';
};
const fun3 = (arg) => {
  return arg + 'fun3';
};

const fun4 = (arg) => {
  return arg + 'fun4';
};

const myPipe = function (...fncs) {
  return function (arg) {
    return fncs.reduce((acc, curr) => curr(acc), arg);
  };
};

const myCompose = function (...fncs) {
  return function (arg) {
    return fncs.reverse().reduce((acc, curr) => curr(acc), arg);
  };
};

console.log('Pipe function', myPipe(fun1, fun2, fun3, fun4)('start'));
console.log('Compose function', myCompose(fun1, fun2, fun3, fun4)('start'));
