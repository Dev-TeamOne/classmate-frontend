import { useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Checkbox />
    </div>
  );
}

export default App;
