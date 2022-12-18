import './App.css';
import { Counter } from './Counter';
import { Accordion } from './Accordion'
import React, { useState } from 'react';
import { Input } from './input';
import { MoviesList } from './Movies/moviesList';


function App() {
  const [issudoToggled, setsudoToggled] = useState(1)
  console.log(issudoToggled);
  return (
    <div class="pageManager">
      <button
        style={{ fontSize: '20px' }}
        onClick={() => {
          if (issudoToggled === 4) {
            setsudoToggled(1);
          } else { setsudoToggled(issudoToggled + 1); }
        }}
      >Content Switcher</button>
      <div class = "render">
        {issudoToggled === 1 ?
          <Counter />
          : issudoToggled === 2 ?
            <Accordion />
            : issudoToggled === 3 ?
              <Input />
              : <MoviesList />
        }
      </div>
    </div>
  );
}

export default App;