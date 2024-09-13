import Folder from './component/Folder';
import useFolderTraversal from './hooks/useFolderTraversal';
import './index.css';

const FolderStructure = ({ data }) => {
  const { treeData, deleteNode, renameNode, addNode } =
    useFolderTraversal(data);
  if (!treeData || !treeData.length) return <>No files to show</>;
  // return ()
  return (
    <div className="container">
      <Folder
        data={treeData[0]}
        deleteNode={deleteNode}
        addNode={addNode}
        renameNode={renameNode}
      />
    </div>
  );
};

export default FolderStructure;

//Folder->rename, addfile, addFolder, delete folder
//file-> rename, dletefile
