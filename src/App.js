import logo from './logo.svg';
import './App.css';

import React,{useEffect} from "react";
import ReactGA from "react-ga";  //Google Analytics

function App() {
  
  useEffect(() => {
    ReactGA.initialize('UA-181953223-1');
    ReactGA.pageview(window.location.pathname);
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Analytics (Tracking) and Optimize tags are added 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
