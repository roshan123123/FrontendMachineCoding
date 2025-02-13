const UlContainer = document.querySelector('ul');
let currentCount = 0;
const addElements = (offset = 50) => {
  //make some apu call
  const tempFragement = document.createDocumentFragment();
  for (let i = 0; i < offset; i++) {
    const templi = document.createElement('li');
    templi.innerText = Number(currentCount + i);
    tempFragement.appendChild(templi);
  }
  UlContainer.appendChild(tempFragement);
  currentCount += offset;
};
const scrollHandler = (e) => {
  if (
    e.target.scrollHeight - 50 <=
    e.target.scrollTop + e.target.clientHeight
  ) {
    console.log(e.target.scrollHeight, 'reached to the end');
    addElements();
  }
};

UlContainer.addEventListener('scroll', scrollHandler);

addElements();
