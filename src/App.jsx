import './App.css';

import Container1 from './components/Containers/Container1/Container1';
import Container2 from './components/Containers/Container2/Container2';
import Container3 from './components/Containers/Container3/Container3';
import Container4 from './components/Containers/Container4/Container4';
import Container5 from './components/Containers/Container5/Container5';
import ContainerReloj from './components/Containers/ContainerReloj/ContainerReloj';
import Encabezado from './components/Components/Encabezado/Encabezado';
import Saludo from './components/Components/Saludo/Saludo';

function App() {
  return (
    <div className="App">
      <Encabezado/>
      <div className="reloj">
        <ContainerReloj/>
      </div>
      <div className='containerComponentes'>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </div>
      <Saludo/>
    </div>
  );
}

export default App;
