import React, { useState } from 'react';
import UpcertTerm from './UpcertTerm';


const Term = ({term, flashcard, refresh}) => {
    const [flip, setFlip] = useState(false)
    const [update, setUpdate] = useState(false);
    const toggleForm = () => setUpdate(!update);
    
    return(
        <div 
        className={`card ${flip ? 'flip' : ''}`}
        >
            
            <div className="front">
                {term.word} <br/>
            <button
            onClick={() => setFlip(!flip)}>
                FLIP
            </button>
            </div>
            <div className="back">
                {term.category} <br/>
                {term.definition} <br/>
            <button
                onClick={() => setFlip(!flip)}>
                FLIP
            </button>
            <i onClick= {()=> toggleForm()} className="fa fa-edit EdtBtn"></i>
               
            {update ?
            <UpcertTerm term={term}
                toggleForm={toggleForm}
                refresh={refresh} /> : '' } 
            </div>
          
          
        </div>

  
    )
}
export default Term;

                         

            //  word: {term.word}  <br/>
            //  definition: {term.definition}

        