import logo from './logo.svg';
// import './App.css';
import Nature from './Components/Nature';
import Culture from './Components/Culture';
import Streets from './Components/Streets';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Nature/>} />
    <Route path="/culture" element={<Culture/>} />
    <Route path="/street" element={<Streets/>} />
  </Routes>
  );
}

export default App;
