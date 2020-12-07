import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import SalesForm from './pages/SaleForm';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SalesForm></SalesForm>
      <Cars></Cars>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
