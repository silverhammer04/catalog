import React from 'react';


export default class UpcertTerm extends React.Component {
    state = {
        word: this.props.term.word,
        definition: this.props.term.definition,
        category: this.props.term.category,
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/catalog/${this.props.term._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }) .then(response => response.json())
            .then(data => console.log(data))
            .then(this.props.toggleForm)
            .then(this.props.refresh)            
    }
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value});
        }
    
    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                
            <textarea name="definition"
                type="textarea"
                placeholder="definition"
                value={this.state.definition}
                onChange={this.handleChange} />
            <br/>
            

            <input type="submit"
                value="Change Term"/>
        </form>           
        ) 
    }
}
