import React, { useState } from 'react';
import { data } from './constant';
import './index.css';

const TimedPractce = () => {
  const [folderData, setFolderData] = useState(data);
  const addHandler = (isFolder, path, name) => {
    const newObj = {
      key: Date.now(),
      title: name,
      isFolder: isFolder,
      children: [], // Added empty children array
    };

    const newFOlderData = structuredClone(folderData);
    let parent = newFOlderData;
    for (let i = 0; i < path.length; i++) {
      parent = parent.children[path[i]];
    }
    parent.children = [newObj, ...parent.children];
    setFolderData(newFOlderData);
  };

  const deleteHandler = (e, path) => {
    e.stopPropagation();
    const newFOlderData = structuredClone(folderData);
    if (path.length == 0) setFolderData(null);
    let parent = newFOlderData;
    for (let i = 0; i < path.length - 1; i++) {
      parent = parent.children[path[i]];
    }
    parent.children = parent.children.filter(
      (ele, index) => index != path[path.length - 1]
    );
    setFolderData(newFOlderData);
  };

  return (
    <div>
      TimedPractce{' '}
      <RenderFolder
        folderData={folderData}
        path={[]}
        addHandler={addHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

const RenderFolder = ({ folderData, path, addHandler, deleteHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const [neFileName, setNewFileName] = useState('');
  const [addType, setAddType] = useState(null); //"FOLDER" | "FILE"
  const [additionActive, setAdditionActive] = useState(false);
  const handleBlur = () => {
    setAddType(null);
    setAdditionActive(false);
    setNewFileName('');
  };

  const handleEnter = (e) => {
    if (e.key == 'Enter') {
      console.log('enter presed');
      addHandler(addType == 'FOLDER', path, neFileName);
      setAddType(null);
      setAdditionActive(false);
      setNewFileName('');
    }
  };

  if (!folderData) return null;
  return (
    <>
      <ul>
        <li>
          <div className="FolderTitle" onClick={handleOpenToggle}>
            <span>{folderData.isFolder ? ' FOL ' : ' FIL '}</span>
            <span>{folderData.title}</span>
            {folderData.isFolder && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                    setAdditionActive(true);
                    setAddType('FILE');
                  }}
                >
                  ADD File
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                    setAdditionActive(true);
                    setAddType('FOLDER');
                  }}
                >
                  ADD Folder
                </button>
                <button onClick={(e) => deleteHandler(e, path)}>
                  DeleteFolder
                </button>
              </>
            )}

            {!folderData.isFolder && (
              <button onClick={(e) => deleteHandler(e, path)}>
                DeleteFile
              </button>
            )}
          </div>
          {additionActive && (
            <input
              style={{ width: '200px' }}
              autoFocus
              onBlur={handleBlur}
              value={neFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              onKeyDown={handleEnter}
            />
          )}
          {isOpen &&
            folderData?.children?.length > 0 &&
            folderData.children.map((ele, index) => (
              <RenderFolder
                key={ele.key}
                folderData={ele}
                path={[...path, index]}
                addHandler={addHandler}
                deleteHandler={deleteHandler}
              />
            ))}
        </li>
      </ul>
    </>
  );
};

export default TimedPractce;
