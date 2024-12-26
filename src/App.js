import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import Notfound from './components/notfound';
import './index.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<List />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
