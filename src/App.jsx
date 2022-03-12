import './App.css';
import Encabezado from './components/Components/Encabezado/Encabezado';
import CardContainer from './components/Containers/CardContainer/CardContainer';
import ContainerReloj from './components/Containers/ContainerReloj/ContainerReloj';


function App() {
  return (
    <div className="App">
      <Encabezado/>
      <ContainerReloj/>
      <CardContainer/>
    </div>
  );
}

export default App;
