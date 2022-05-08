import './App.css';
import Landing from './components/Landing/Landing'
import TestEnvLabel from './components/TestEnvLabel/TestEnvLabel';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      {process.env.NODE_ENV != 'production' && <TestEnvLabel/>}
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/:familyId' element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
