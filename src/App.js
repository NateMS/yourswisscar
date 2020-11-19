import logo from './logo.png';
import './App.css';
import Cars from './pages/cars/Cars';
import Contact from './pages/Contact';
import SalesForm from './pages/SaleForm';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <About></About>
      <SalesForm></SalesForm>
      <Cars></Cars>
      <Contact></Contact>
    </div>
  );
}

export default App;
