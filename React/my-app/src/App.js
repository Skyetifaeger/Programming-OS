import './App.css';
import { Counter } from './Counter';
import { Accordion } from './Accordion'
import React, { useState } from 'react';
import { Input } from './input';


function App() {
  const [issudoToggled, setsudoToggled] = useState(1)
  const [count, setCount] = useState(1);
  console.log(issudoToggled);
  return (
    <div class="counterAccordion">
      <button
        onClick={() => {
          if (issudoToggled === 3) {
            setsudoToggled(1);
          } else {setsudoToggled(issudoToggled + 1);}
        }}
      >Counter + Accordion</button>

      {issudoToggled == 1 ?
        <Counter />
        : issudoToggled == 2 ?
          <Accordion />
        : <Input />
      }
    </div>
  );
}

export default App;