import React from 'react';
import Terms from './components/Terms';
import './App.css';
import SelectCat from "./components/SelectCat";

function App() {
       
  
  return (
  <>
    <div className="head">
      <h1>Catalog Project</h1>
    </div> 
    
    <SelectCat />
    <div>
        <Terms />

    </div>
    <br/>
    <footer className='foot'>
      <h2>Your Ad Here</h2>
    </footer>

  </>
  );
}

export default App;
