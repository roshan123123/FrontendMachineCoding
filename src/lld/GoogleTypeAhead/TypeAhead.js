import { useEffect, useRef, useState } from 'react';
import { fetchData } from './helper/utils';
import './index.css';

import useDebounce from '../../custom-hooks/useDebounce';

const TypeAhead = () => {
  const [input, setInput] = useState('');
  const [listIsOpen, setListIsOpen] = useState(false);
  const [suggestionList, setSuggestionList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);
  async function populateSuggestionList(input) {
    const data = await fetchData(input);
    setSuggestionList(data);
  }
  const debounceDfunction = useDebounce(populateSuggestionList, 500);

  const handlekeyDown = (e) => {
    if (
      suggestionList.length > 0 &&
      (e.key == 'ArrowDown' || e.key == 'ArrowUp' || e.key == 'Enter')
    ) {
      if (e.key == 'ArrowDown') {
        if (suggestionList.length - 1 == selectedOption) {
          setSelectedOption(0);
        } else {
          setSelectedOption((prev) => prev + 1);
        }
      }
      if (e.key == 'ArrowUp') {
        console.log('aksdnfjn');
        if (selectedOption == 0) {
          setSelectedOption(suggestionList.length - 1);
        } else {
          setSelectedOption((prev) => prev - 1);
        }
      }
      if (e.key == 'Enter') {
        setInput(suggestionList[selectedOption]);
        setListIsOpen(false);
      }
    }
  };

  const handleChange = (e) => {
    debounceDfunction(e.target.value);
    setSelectedOption(0);
    setListIsOpen(true);
    setInput(e.target.value);
  };
  // const handleBlur = () => {};
  const handleBlur = (e) => {
    console.log('handleBlurevent', e.target);
    setSelectedOption(null);
    setListIsOpen(false);
  };

  const handleOptionsCLick = (e, index) => {
    setInput(suggestionList[index]);
    setListIsOpen(false);
  };

  useEffect(() => {
    if (!input) {
      setListIsOpen(false);
    }
  }, [input]);

  return (
    <div
      className="TypeAhead_container"
      onBlur={handleBlur}
      ref={ref}
      onKeyDown={handlekeyDown}
    >
      <input value={input} onChange={handleChange} autoFocus />
      {listIsOpen && (
        <div className="suggestion-box">
          {suggestionList.map((ele, index) => {
            return (
              <div
                className="option"
                // onMouseDown on suggestions: This ensures that the click on a suggestion is handled before the onBlur event on the parent div is triggered.
                //  Unlike onClick, onMouseDown happens before the focus change.
                onMouseDown={(e) => handleOptionsCLick(e, index)}
                key={index}
                style={{ background: selectedOption === index ? 'red' : '' }}
              >
                {ele}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TypeAhead;
