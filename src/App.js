import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { dataProduct } from './Components/Product/data';
import { dataProductSweet } from './Components/Product/data';

import Hero from './Components/Hero/index';
import Products from './Components/Product/index';
import Feature from './Components/Feature/index';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products
        headingProduct={'Choose your favorite'}
        data={dataProduct} />
      <Feature />
      <Products
        headingProduct={'Sweet Treats for You'}
        data={dataProductSweet} />
      <Footer />
    </Router>
  );
}

export default App;
