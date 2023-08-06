import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage";
import {StoryPage} from "./pages/StoryPage/StoryPage";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/story/:id" element={<StoryPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
