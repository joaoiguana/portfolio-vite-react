import { useState, useEffect } from 'react';
import LoadingSpinner from './components/Loading/LoadingSpinner.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import './App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);  // 3 seconds timeout for loading screen

    return () => clearTimeout(timer);  // Clear timer if component unmounts
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="container fade-in">
          <Header />
          <Main />
        </div>
      )}
    </>
  );
}

export default App
