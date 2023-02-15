import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  console.log("App running")

  const toggleParagraph = useCallback(() => 
  {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }, [])
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraph}>Allow toggling</Button>
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
    </div>
  );
}

export default App;
