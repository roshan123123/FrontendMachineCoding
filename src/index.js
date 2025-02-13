import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//component
import FolderStructure from './lld/FolderStructure';
import SelectableGrid from './lld/SelectableGrid';
import GridLights from './lld/GridLights';
import ProgressBar from './lld/ProgressBarPercentage';
import DragAndDropNotes from './lld/DragAndDropNotes';
import InfiniteScroll from './lld/InfiniteScroll';
import TypeAhead from './lld/GoogleTypeAhead/TypeAhead';
import TransferList1 from './lld/TransferLists';
import NestedCheckBox from './lld/NestedCheckBox';
import ProgressBarGfe from './lld/Progress-bar-gfe';
import Stepper from './lld/Stepper';
import TimedPractce from './lld/TimedPractice/TimedPractce';
import Table from './lld/Table/Table';
import IndexSignificance from './lld/UnderstandingReact/IndexSignificance';
import ReactRerenders from './lld/UnderstandingReact/ReactRenders';
import StopWatch from './lld/stopWatch';
import DigitalClock from './lld/digitalClock';
import VirtualisedList from './lld/virtualisedList';
import AudiSign from './lld/audiSign';
import UndoableCounter from './lld/undoable_counter/Undoable_Counter';
import Tabs from './lld/TabsGfe';
import ScrollPercentageIndicator from './lld/Scroll_Progress_Percentage/ScrollPercentageIndicator';

//constants
import Routes from './RouteConstant';

const router = createBrowserRouter([
  {
    path: `/${Routes.SCROLL_PERCENTAGE}`,
    element: <ScrollPercentageIndicator />,
  },
  { path: `/${Routes.TABS_GFE}`, element: <Tabs /> },
  { path: `/${Routes.UNDOABLE_COUNTER}`, element: <UndoableCounter /> },
  { path: `/${Routes.AUDI_SIGN}`, element: <AudiSign /> },
  { path: `/${Routes.VIRTUALISATION}`, element: <VirtualisedList /> },
  { path: `/${Routes.DIGITAL_CLOCK}`, element: <DigitalClock /> },
  { path: `/${Routes.STOP_WATCH}`, element: <StopWatch /> },
  {
    path: `/${Routes.REACT_RERENDERS}`,
    element: <ReactRerenders />,
  },
  {
    path: `/${Routes.KEY_SIGNIFICANCE}`,
    element: <IndexSignificance />,
  },
  {
    path: `/${Routes.TABLE}`,
    element: <Table />,
  },
  {
    path: `/${Routes.TIMED_PRACTICE}`,
    element: <TimedPractce />,
  },
  {
    path: `/${Routes.STEPPER}`,
    element: <Stepper />,
  },
  {
    path: `/${Routes.PROGRESS_BAR_GFE_CONCURRENT}`,
    element: <ProgressBarGfe />,
  },
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
    element: <FolderStructure />,
  },
  {
    path: `/${Routes.SELECTABLE_GRID}`,
    element: <SelectableGrid rows={8} columns={6} />,
  },
  {
    path: `/${Routes.GRID_LIGHTS}`,
    element: <GridLights />,
  },
  {
    path: `/${Routes.PROGRESS_BAR_PERCENTAGE}`,
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
// commenting react strict to make sure that useEffect are not run multiple times
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
