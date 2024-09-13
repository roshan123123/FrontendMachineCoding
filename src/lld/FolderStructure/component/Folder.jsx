import { useState } from 'react';
const Folder = ({ data, deleteNode, addNode, renameNode }) => {
  const [addActive, setAddActive] = useState({
    isActive: false,
    isFolder: null,
  });
  const [newNodeName, setNewNodeName] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [renameActive, setRenameActive] = useState({
    isOpen: false,
    key: null,
  });
  const [newName, setNewName] = useState('');

  const handleDelete = (key) => {
    deleteNode(key);
  };

  const handleNewNodeBLur = () => {
    setAddActive({ isActive: false, isFolder: null });
    setNewNodeName('');
  };

  const handleRenameInputBlur = () => {
    setRenameActive({ isOpen: false, key: null });
  };

  const handleRenameInputKeyDown = (e, key) => {
    if (e.key === 'Enter' && newName) {
      renameNode(key, newName);
      setRenameActive({ isOpen: false, key: null });
    }
  };

  const handleAdd = (key, isFolder) => {
    setIsExpanded(true);
    setAddActive({ isActive: true, isFolder: isFolder });
  };

  const handleRename = (key, name) => {
    setRenameActive({
      isOpen: true,
      key: key,
    });
    setNewName(name);
  };

  const handleNewNodeKeyDown = (e, key) => {
    if (e.key === 'Enter' && newNodeName) {
      addNode(key, addActive.isFolder, newNodeName);
      setAddActive({
        isActive: false,
        isFolder: null,
      });
      setNewNodeName('');
    }
  };

  return (
    <div className="folderContainer">
      <div className="FolderTitle">
        <span
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        >
          {renameActive.isOpen && renameActive.key === data.key ? (
            <>
              <span style={{ paddingRight: '5px' }}>📁</span>
              <input
                autoFocus
                onBlur={() => handleRenameInputBlur()}
                onKeyDown={(e) => handleRenameInputKeyDown(e, data.key)}
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
            </>
          ) : (
            `📁 ${data.title}`
          )}
        </span>
        <div className="actions">
          <span onClick={() => handleAdd(data.title, false)}>+File</span>
          <span onClick={() => handleAdd(data.title, true)}>+Folder</span>
          <span onClick={() => handleDelete(data.key)}>-</span>
          <span onClick={() => handleRename(data.key, data.title)}>rename</span>
        </div>
      </div>
      <div className="childCOntainter">
        <div style={{ display: 'flex', gap: '5px' }}>
          {addActive.isActive && addActive.isFolder && `📁`}
          {addActive.isActive && !addActive.isFolder && `🗄️`}
          {addActive.isActive && (
            <input
              type="text"
              value={newNodeName}
              onKeyDown={(e) => handleNewNodeKeyDown(e, data.key)}
              onChange={(e) => setNewNodeName(e.target.value)}
              autoFocus
              onBlur={handleNewNodeBLur}
            />
          )}
        </div>
      </div>

      <div className="childCOntainter">
        {isExpanded &&
          data.children.map((element, idx) => {
            return !element.isFolder ? (
              <div className="fileTitle" key={element.key}>
                {renameActive.isOpen && renameActive.key === element.key ? (
                  <>
                    <span style={{ paddingRight: '5px' }}>🗄️ </span>
                    <input
                      autoFocus
                      onBlur={() => handleRenameInputBlur()}
                      onKeyDown={(e) =>
                        handleRenameInputKeyDown(e, element.key)
                      }
                      value={newName}
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                    />
                  </>
                ) : (
                  `🗄️  ${element.title}`
                )}
                <div className="actions">
                  <span onClick={() => handleDelete(element.key)}>-</span>
                  <span
                    onClick={() => handleRename(element.key, element.title)}
                  >
                    rename
                  </span>
                </div>
              </div>
            ) : (
              <Folder
                key={element.key}
                data={element}
                deleteNode={deleteNode}
                addNode={addNode}
                renameNode={renameNode}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Folder;
