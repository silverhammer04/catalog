import React from 'react';
import Term from './Term';

class Terms extends React.Component{
    state={
        terms:[ ]
    }
    getTerms = () => {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/catalog`)
            .then(response => response.json())
            .then(data => this.setState({terms:data}))
    }
    componentDidMount() {
        this.getTerms();
    }
    render(){
        const displayTerms = this.state.terms.map(term =>
        <Term 
            key={term._id} 
            term={term} />
            
        )
        return (
            <>
                <h2>Catalog of Terms</h2>
                <ul>
                    {displayTerms}
                </ul>
            </>
        )
    }
}
export default Terms;
