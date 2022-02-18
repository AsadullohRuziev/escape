import './App.css';
import Header from './components/Header/Header';
import Link from './components/Link/Link';
import Main from './context/Main';

function App() {
  return (
    <div className="App">
        <Header/>
        <Link/>
        <Main/>
    </div>
  );
}

export default App;
