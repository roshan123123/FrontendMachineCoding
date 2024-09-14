import GridLightComponent from './Component/GridLightComponent';
import './index.css';
const GridLights = () => {
  const matrix = [
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 1],
  ];
  return <GridLightComponent matrix={matrix} />;
};

export default GridLights;
