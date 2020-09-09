import React from 'react';

class SelectCat extends React.Component{
    state={
        terms:[ ]
    }
    
    
    render(){
       
        return (
            <>
                 <select className="SelCat" 
                    name="category"
                    value={this.state.category}>
                    <option value="ALL">ALL</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="Tech">Tech</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
            </>
        )
    }
}
export default SelectCat;
