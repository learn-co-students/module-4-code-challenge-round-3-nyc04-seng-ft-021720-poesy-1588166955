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
    let readButton
    if(this.state.read){
      readButton = <button onClick={this.toggleRead}>Mark as unread</button>
    } else {
      readButton = <button onClick={this.toggleRead}>Mark as read</button>
    }
    if(!this.props.favoritesView) {return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        {readButton}
      </div>
    );
  } else {
    return (
      <></>
    )
  }
}}

export default Poem;
