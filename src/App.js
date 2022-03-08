import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Hero from './Components/Hero/index';
import Products from './Components/Product/index';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products headingProduct={'Choose your favorite'} />
    </Router>
  );
}

export default App;
