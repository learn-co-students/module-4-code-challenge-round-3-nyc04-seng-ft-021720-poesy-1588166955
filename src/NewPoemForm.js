import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: "",
    author:  ""
  }

  handleChangeAllInputs = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
      this.props.addOnePoem(this.state)
  }

  render() {
    return (
      <form className="new-poem-form"
        onSubmit={this.handleSubmit}
      >
        <input 
        placeholder="Title"
        name= "title"
        value={this.state.title} 
        onChange={this.handleChangeAllInputs}
        />
        <input 
        placeholder="Author" 
        name= "author"
        value={this.state.author}
        onChange={this.handleChangeAllInputs}
        />

        <textarea 
        placeholder="Write your masterpiece here..." 
        name= "content"
        rows={10}
        value={this.state.content} 
        onChange={this.handleChangeAllInputs}
        />
        <input 
        type="submit" 
        value="Share your masterpiece" 
        />
      </form>
    );
  }
}

export default NewPoemForm;
