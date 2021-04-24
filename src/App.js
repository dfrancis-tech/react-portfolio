import logo from './logo2.gif';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home></Home>
      <img src={logo} alt="logo"/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </a> */}

      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
