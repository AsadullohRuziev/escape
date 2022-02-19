import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Link from './components/Link/Link';
import Main from './context/Main';

function App() {
  return (
    <div className="App">
        <Header/>
        <Link/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
