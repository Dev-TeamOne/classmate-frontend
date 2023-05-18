import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Poll, QnA } from './pages';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/qna' element={<QnA />} />
        <Route path='/polls' element={<Poll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
