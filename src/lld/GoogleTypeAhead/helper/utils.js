const sleep = async (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export const fetchData = async (input) => {
  //   await sleep(550);
  const dataArray = new Array(10).fill(0).map((ele, index) => input + index);
  return dataArray;
};
