import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  );
}