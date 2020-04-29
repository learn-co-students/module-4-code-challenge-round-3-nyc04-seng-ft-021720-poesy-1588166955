import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  toggleRead = () => {
    this.setState({
      read: !this.state.read
    })
    console.log(this.state)
  }

  render() {
    console.log(this.props.poem)
    let button
    if(this.state.read){
      button = <button onClick={this.toggleRead}>Mark as unread</button>
    } else {
      button = <button onClick={this.toggleRead}>Mark as read</button>
    }
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        {button}
      </div>
    );
  }
}

export default Poem;
