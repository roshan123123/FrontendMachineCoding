import Routes from './RouteConstant';
import { Link } from 'react-router-dom';
function App() {
  const RoutesArr = [];
  for (const property in Routes) {
    RoutesArr.push(Routes[property]);
  }
  return (
    <>
      <div className="App">this is the dummy app</div>
      <ul>
        {RoutesArr.map((path) => (
          <li key={path}>
            <Link to={path}>{path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
