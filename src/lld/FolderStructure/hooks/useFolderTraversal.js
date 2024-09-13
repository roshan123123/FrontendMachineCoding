import { useCallback, useState } from 'react';

const useFolderTraversal = (data) => {
  const [treeData, setTreedata] = useState(data);

  const deleteAndreturnNewtree = (key, root) => {
    const resultarr = [];
    if (!root || root.length === 0) return [];
    for (let i = 0; i < root.length; i++) {
      if (root[i].key !== key) {
        const newChildren = deleteAndreturnNewtree(key, root[i].children);
        const object = { ...root[i], children: newChildren };
        resultarr.push(object);
      }
    }
    return resultarr;
  };

  const addNenodeAndReturnTree = (key, isFolder, name, root) => {
    const resultarr = [];
    if (!root || root.length === 0) return [];

    for (let i = 0; i < root.length; i++) {
      if (root[i].key === key) {
        const newNode = {
          key: Date.now(),
          title: name,
          isFolder: isFolder,
          children: [],
        };
        root[i].children.unshift(newNode);
        const newObj = { ...root[i] };
        resultarr.push(newObj);
      } else {
        const newObj = {
          ...root[i],
          children: addNenodeAndReturnTree(
            key,
            isFolder,
            name,
            root[i].children
          ),
        };
        resultarr.push(newObj);
      }
    }
    return resultarr;
  };
  const renameandAddNewtree = (key, name, root) => {
    const resultarr = [];
    if (!root || root.length === 0) return [];

    for (let i = 0; i < root.length; i++) {
      if (root[i].key === key) {
        const newObj = { ...root[i], title: name };
        resultarr.push(newObj);
      } else {
        const newObj = {
          ...root[i],
          children: renameandAddNewtree(key, name, root[i].children),
        };
        resultarr.push(newObj);
      }
    }
    return resultarr;
  };
  const addNode = useCallback(
    (key, isFolder, name) => {
      const newTree = addNenodeAndReturnTree(key, isFolder, name, treeData);
      setTreedata(newTree);
    },
    [treeData]
  );

  const deleteNode = useCallback(
    (key) => {
      const newTree = deleteAndreturnNewtree(key, treeData);
      setTreedata(newTree);
    },
    [treeData]
  );

  const renameNode = useCallback(
    (key, newName) => {
      const newTree = renameandAddNewtree(key, newName, treeData);
      setTreedata(newTree);
    },
    [treeData]
  );

  return { treeData, deleteNode, renameNode, addNode };
};

export default useFolderTraversal;
