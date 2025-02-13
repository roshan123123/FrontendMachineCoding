const addButton = document.querySelector('.AddButton');
const inputEle = document.querySelector('input');
const ulElement = document.querySelector('ul');

const handleAdd = () => {
  if (inputEle.value) {
    let tempLi = document.createElement('li');

    const title = document.createElement('span');
    title.innerText = inputEle.value;
    inputEle.value = '';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.onclick = function () {
      tempLi.remove();
    };

    tempLi.appendChild(title);
    tempLi.appendChild(deleteButton);

    ulElement.appendChild(tempLi);
  }
};

addButton.addEventListener('click', handleAdd);
