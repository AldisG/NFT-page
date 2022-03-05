import { Routes, Route } from 'react-router-dom';
// import { useGetAnyDataQuery } from './store/services/storeApiCalls';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';

const test = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  // const { data, error, isLoading, isError } = useGetAnyDataQuery(undefined);
  const app = 'app';

  return (
    <motion.div
      variants={test}
      initial={test.start}
      animate={test.end}
      className="app-container"
    >
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </motion.div>
  );
};

export default App;
