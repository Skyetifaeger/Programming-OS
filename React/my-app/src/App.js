import './App.css';
import React, { useState } from 'react';
import { PageManager } from './pageManager';


function App() {
  const [issudoToggled, setsudoToggled] = useState(4)
  return (
    <PageManager issudoToggled={issudoToggled} setsudoToggled={setsudoToggled} />
  );
}

export default App;