import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';
import { useState } from 'react';

const fadeIn = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  const [theme, settheme] = useState('dark');
  const changeTheme = () => {
    theme === 'dark' ? settheme('light') : settheme('dark');
  };
  return (
    <motion.div
      variants={fadeIn}
      initial={fadeIn.start}
      animate={fadeIn.end}
      className="app-container"
      data-theme={theme}
    >
      <ScrollToTop />
      <NavBar changeTheme={changeTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </motion.div>
  );
};

export default App;
