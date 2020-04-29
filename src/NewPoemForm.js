import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log("testing submission")
    event.preventDefault()
    fetch("http://localhost:6001/poems", 
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: this.state.title,
        content: this.state.content,
        author: this.state.author
      })
    })
    .then(response => response.json())
    // .then(poem => renderNew(poem))
    

  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="Title" name="title" onChange = {this.handleInputChange}/>
        <input placeholder="Author" name="author" onChange = {this.handleInputChange} />
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" onChange = {this.handleInputChange} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
