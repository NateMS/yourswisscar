import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Cars from './pages/cars/Cars';
import Contact from './pages/Contact';
import SalesForm from './pages/SaleForm';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <SalesForm></SalesForm>
      <Cars></Cars>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
