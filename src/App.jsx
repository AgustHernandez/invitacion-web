import './App.css';

import Container1 from './Containers/Container1/Container1';
import Container2 from './Containers/Container2/Container2';
import Container3 from './Containers/Container3/Container3';
import Container4 from './Containers/Container4/Container4';
import Container5 from './Containers/Container5/Container5';
import ContainerReloj from './Containers/ContainerReloj/ContainerReloj';
import Encabezado from './components/Encabezado/Encabezado';
import Imagen1 from './components/Imagen1/Imagen1';
import Imagen2 from './components/Imagen2/Imagen2';
import Saludo from './components/Saludo/Saludo';

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
        <Imagen1/>
        <Container3 />
        <Container4 />
        <Imagen2/>
        <Container5 />
      </div>
      <Saludo/>
    </div>
  );
}

export default App;
