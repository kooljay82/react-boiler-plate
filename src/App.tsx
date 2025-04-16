import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="*"
        element={
          <div>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
          </div>
        }
      />
    </Routes>
  );
};
export default App;
