import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fuck from './pages/Fuck'; // Ensure correct file path
import Hedge from './pages/Hedge';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/gv" element={<Fuck />} />
        <Route path='/' element={<Hedge />} />
      </Routes>
    </div>
  );
};

export default App;  