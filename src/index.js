import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//component
import FolderStructure from './lld/FolderStructure';
import SelectableGrid from './lld/SelectableGrid';

//helper
import data from './lld/FolderStructure/constants/data';

//constants
import Routes from './RouteConstant';
import GridLights from './lld/GridLights';
import ProgressBar from './lld/ProgressBar';
import DragAndDropNotes from './lld/DragAndDropNotes';
import InfiniteScroll from './lld/InfiniteScroll';
import TypeAhead from './lld/GoogleTypeAhead/TypeAhead';
import TransferList1 from './lld/TransferList_1';
import NestedCheckBox from './lld/NestedCheckBox';
const router = createBrowserRouter([
  {
    path: `/${Routes.NESTED_CHECK_BOX}`,
    element: <NestedCheckBox />,
  },

  {
    path: `/${Routes.TRANSFER_LIST_1}`,
    element: <TransferList1 />,
  },
  {
    path: `/${Routes.FOLDERSTRUCTURE}`,
    element: <FolderStructure data={data} />,
  },
  {
    path: `/${Routes.SELECTABLE_GRID}`,
    element: <SelectableGrid rows={10} columns={10} />,
  },
  {
    path: `/${Routes.GRID_LIGHTS}`,
    element: <GridLights />,
  },
  {
    path: `/${Routes.PROGRESS_BAR}`,
    element: <ProgressBar />,
  },
  {
    path: `/${Routes.DRAG_AND_DROP}`,
    element: <DragAndDropNotes />,
  },
  { path: `/${Routes.INFINITE_SCROLL}`, element: <InfiniteScroll /> },
  { path: `/${Routes.TYPE_AHEAD}`, element: <TypeAhead /> },
  {
    path: '/',
    element: <App />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
