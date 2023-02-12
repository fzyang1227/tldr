import React, {useState} from 'react';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme} from './components/themes';
import "./app.css"

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
    // console.log(isDarkMode);
  }
    
  

  return (
      <div className="full">
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header title="tl;dr" isDark={isDarkMode} rightIcon="fas fa-gear fa-1x"/>
        <Content/>
        <Footer/>
        </ThemeProvider>
      </div>
  );
}

export default App;
