import { useState, useRef, useEffect } from 'react';
import { checkboxesData } from './constant';
import './index.css';
const NestedCheckBox = () => {
  const [checkboxData, setCheckBoxData] = useState(checkboxesData);

  const updateParents = (root, pathAfterroot) => {
    //the recursive call vanishes when we have reached the ele which was preseed
    //and that is being handled by mark child
    if (pathAfterroot.length === 0) return;

    updateParents(root.children[pathAfterroot[0]], pathAfterroot.slice(1));

    let checkededElementCount = 0;
    for (let i = 0; i < root.children.length; i++) {
      if (root.children[i].checked === true) checkededElementCount++;
    }

    let uncheckedElementcount = 0;
    for (let i = 0; i < root.children.length; i++) {
      if (root.children[i].checked === false) uncheckedElementcount++;
    }
    if (checkededElementCount === root.children.length) root.checked = true;
    else if (uncheckedElementcount === root.children.length)
      root.checked = false;
    else root.checked = 'indeterminate';
  };

  const updateDesendents = (root, checkedValue) => {
    if (!root) return null;
    root.checked = checkedValue;
    if (root?.children?.length > 0) {
      root.children.forEach((child) => {
        updateDesendents(child, checkedValue);
      });
    }
  };

  const handleCheck = (path, checkedValue) => {
    console.log(path, checkedValue);
    const newCheckBoxdata = structuredClone(checkboxData);
    //find the element which was modified
    let modifiedElement = newCheckBoxdata[path[0]];
    for (let i = 1; i < path.length; i++) {
      modifiedElement = modifiedElement.children[path[i]];
    }
    //update the decendants
    updateDesendents(modifiedElement, checkedValue);

    //update the parents
    updateParents(newCheckBoxdata[path[0]], path.slice(1));
    setCheckBoxData(newCheckBoxdata);
  };
  return (
    <>
      {checkboxData.map((ele, index) => (
        <CheckboxRenderer
          checkBoxObj={ele}
          key={ele.id}
          path={[index]}
          handleCheck={handleCheck}
        />
      ))}
    </>
  );
};

const CheckboxRenderer = ({ checkBoxObj, path, handleCheck }) => {
  return (
    <>
      <ul>
        <li>
          <Checkbox obj={checkBoxObj} path={path} handleCheck={handleCheck} />
          {checkBoxObj?.children?.length > 0 &&
            checkBoxObj?.children.map((child, index) => {
              return (
                <CheckboxRenderer
                  key={child.id}
                  checkBoxObj={child}
                  path={[...path, index]}
                  handleCheck={handleCheck}
                />
              );
            })}
        </li>
      </ul>
    </>
  );
};

const Checkbox = ({ obj, path, handleCheck }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (obj.checked === 'indeterminate') {
      ref.current.indeterminate = true;
    }
    //for the case when the checked value is false otherwise
    else {
      ref.current.indeterminate = false;
    }
  }, [obj.checked]);

  return (
    <>
      <input
        ref={ref}
        type="checkbox"
        checked={obj.checked}
        onChange={(e) =>
          handleCheck(
            path,
            obj.checked === 'indeterminate' ? true : e.target.checked
          )
        }
      />
      {obj.name}
    </>
  );
};

export default NestedCheckBox;
