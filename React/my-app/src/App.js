import './App.css';
import { Counter } from './Counter';
import { Accordion } from './Accordion'
import React, { useState } from 'react';
import { Input } from './input';


function App() {
  const [issudoToggled, setsudoToggled] = useState(1)
  const [count, setCount] = useState(1);
  return (
    <div class="counterAccordion">
      <button
        onClick={() => setsudoToggled(issudoToggled == 2)}
      >Counter + Accordion</button>

      {issudoToggled == 1 ?
        <Counter />
        : <Accordion />
      }
    </div>
  );
}

export default App;