import './App.css';
import { useState } from 'react';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);
}

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <h1>To Do</h1>
      </header>
      <div>
        <button className='addTaskButton'>Add Task</button>
      </div>
      <div className='tasks'>
        
      </div>
    </div>
  );
}

export default App;