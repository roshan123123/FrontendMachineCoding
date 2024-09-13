import FolderStructure from './lld/FolderStructure';
import data from './lld/FolderStructure/constants/data';
function App() {
  return (
    <>
      <div className="App">this is the dummy app</div>
      <FolderStructure data={data} />
    </>
  );
}

export default App;
