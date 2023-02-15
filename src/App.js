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

  const allowToggleHandler = () => 
  {
    setAllowToggle((prevToggleValue) => !prevToggleValue)
  }
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      {allowToggle && <Button onClick={toggleParagraph}>Show Paragraph</Button>}
    </div>
  );
}

export default App;
