import './App.css';
import { Routes, Route } from 'react-router-dom'
import Starships from './pages/Starships/Starships';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Starships />}/>
      </Routes>
    </div>
  );
}

export default App;
