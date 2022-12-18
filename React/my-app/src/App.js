import './App.css';
import React, { useState } from 'react';
import { PageManager } from './pageManager';


function App() {
  const [issudoToggled, setsudoToggled] = useState(1)
  console.log(issudoToggled);
  return (
    <PageManager issudoToggled = {issudoToggled} setsudoToggled ={setsudoToggled}/>
  );
}

export default App;