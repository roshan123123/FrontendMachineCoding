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
const router = createBrowserRouter([
  {
    path: `/${Routes.FOLDERSTRUCTURE}`,
    element: <FolderStructure data={data} />,
  },
  {
    path: `/${Routes.SELECTABLE_GRID}`,
    element: <SelectableGrid rows={10} columns={10} />,
  },
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
