import React from "react";

class NewPoemForm extends React.Component {
    state = {
        title: "",
        author: "",
        content: ""
    }

    handleInputs = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.submitNewPoem(this.state)
    }

    render() {
        return (
        <form className="new-poem-form" onSubmit={this.handleFormSubmit}>
            <input 
                id="title"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleInputs}
                placeholder="Title"
            />
            <input 
                id="author"
                type="text"
                name="author"
                value={this.state.author}
                onChange={this.handleInputs}
                placeholder="Author"
            />
            <textarea 
                id="content"
                type="text"
                name="content"
                value={this.state.content}
                onChange={this.handleInputs}
                placeholder="Write your masterpiece here..."
                rows={10}
            />
            <input type="submit" value="Share your masterpiece" />
        </form>
        );
    }
}

export default NewPoemForm;
