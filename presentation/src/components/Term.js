import React, { useState} from 'react';
import UpcertTerm from './UpcertTerm';

const Term = ({term, refresh}) => {
    const [update, setUpdate] = useState(false);
    const toggleForm = () => setUpdate(!update);
    return(
        <li>
            
            <i onClick= {()=> toggleForm()} className="fa fa-edit EdtBtn"></i> 
                
             {term.word}
             {term.understand}
                
            {update ?
            <UpcertTerm term={term}
                toggleForm={toggleForm}
                refresh={refresh} /> : '' }
        </li>
    )
}
export default Term;