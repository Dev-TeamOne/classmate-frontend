import { useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* NOTE: 체크박스 테스트용으로 넣은거라 지워서 사용하기 */}
      <div>
        <Checkbox label='Most likes' size='small' />
        <Checkbox label='Recent' size='small' disabled />
      </div>
      <div>
        <Checkbox size='medium' checked={true} disabled />
      </div>
    </div>
  );
}

export default App;
