import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Evaluate from './components/layout/Evaluate';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/evaluate' element={<Evaluate/>}/>
      </Routes>
    </Router>
  );
}

export default App;
