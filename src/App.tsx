import React, {useState} from 'react';
import './App.css';
import App2 from './components/app';
import Header from './components/header';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme} from './components/themes';


function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
    // console.log(isDarkMode);
  }

  return (
    <div>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header title="tl;dr" isDark={isDarkMode} rightIcon="fas fa-gear fa-1x"/>
        <App2/ >
        <div>
          <h1>Hello!</h1>
          <button onClick={handleToggle}>
              <span aria-label="Light mode" role="img">🌞</span>
          </button>
        </div>
      </ThemeProvider>
    </div> 
  );
}

export default App;
