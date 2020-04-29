import React from "react";

class Poem extends React.Component {
  state = {
    read: false,
    favorite: false
  }

  toggle = (event) => {
    const jankyBoolean = (event.target.value === false || event.target.value === "false")
    this.setState({
      [event.target.name]: jankyBoolean
    })
    console.log(this.state)
  }

  render() {
    console.log(this.props.poem)
    let readButton
    let favoriteButton
    if(this.state.read){
      readButton = <button name="read" value={this.state.read} onClick={this.toggle}>Mark as unread</button>
    } else {
      readButton = <button name="read" value={this.state.read} onClick={this.toggle}>Mark as read</button>
    }
    if(this.state.favorite){
      favoriteButton = <button name="favorite" value={this.state.favorite} onClick={this.toggle}>Remove from Favorites</button>
    } else {
      favoriteButton = <button name="favorite" value={this.state.favorite} onClick={this.toggle}>Add to Favorites</button>
    }
    if(!this.props.favoritesView || this.state.favorite) {return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        {readButton}
        {favoriteButton}
      </div>
    );
  } else {
    return (
      <></>
    )
  }
}}

export default Poem;
