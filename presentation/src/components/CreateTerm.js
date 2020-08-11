import React from 'react';

export default class CreateTerm extends React.Component {
    state = {
        word: "",
        definition: "",
        understand: false,
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/catalog`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state)
        }) .then(response => response.json())
            .then(data => console.log(data))
            .then(() => {
                this.setState({
                    word: "",
                    definition: "",
                    understand: ""
                })
            })  .then(this.props.refresh)
    }
    handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value});
    }
    handleCheck = (event) => {
    this.setState({ understand: event.target.checked});
    }
    render() {
        return(
            <form  onSubmit={this.handleSubmit}>
                
                <input name="word"
                    type="text"
                    placeholder="term"
                    value={this.state.word}
                    onChange={this.handleChange} 
                    required/>
                <textarea name="definition"
                    type="textarea"
                    placeholder="definition"
                    value={this.state.definition}
                    onChange={this.handleChange} />
                <br/>
                    Do you Understand this term?
                <input type="checkbox"
                    checked={this.state.understand}
                    onChange={this.handleCheck} /> Check for yes.
                <br/>

                <input type="submit"
                    value="Add Term"/>
            </form>
        )
    }
}