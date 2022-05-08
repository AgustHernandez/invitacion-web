import './App.css';
import Landing from './components/Landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/:familyId' element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
