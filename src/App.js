import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/index';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
