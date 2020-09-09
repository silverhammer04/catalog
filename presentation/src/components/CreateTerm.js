import React from 'react';

export default class CreateTerm extends React.Component {
    state = {
        word: "",
        definition: "",
        category: ""
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
                    category: ""                    
                })
            })  .then(this.props.refresh)
    }
    handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value});
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
                <select name="category"
                    value={this.state.category} 
                    onChange={this.handleChange}>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="Tech">Tech</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                <br/>

                <input type="submit"
                    value="Add Term"/>
            </form>
        )
    }
}