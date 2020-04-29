import React from "react";

class Poem extends React.Component {
  state = {
    read: false,
    favorite: false,
    deleted: false
  }

  toggle = (event) => {
    const jankyBoolean = (event.target.value === false || event.target.value === "false")
    this.setState({
      [event.target.name]: jankyBoolean
    })
    console.log(this.state)
  }

  deletePoem = () => {
    fetch('http://localhost:6001/poems' + '/' + this.props.poem.id, {
      method: 'delete'
    })
    .then(response => response.json())
    .then( this.setState({deleted:true}))
  }

  render() {
    console.log(this.props.poem)
    if(!this.state.deleted && (!this.props.favoritesView || this.state.favorite)) {return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button name="read" value={this.state.read} onClick={this.toggle}>{(this.state.read) ? "Mark as unread" : "Mark as read"}</button>
        <button name="favorite" value={this.state.favorite} onClick={this.toggle}>{(this.state.favorite) ? "Remove from Favorites" : "Add to Favorites"}</button>
        <button onClick={this.deletePoem}> Delete Poem </button>
      </div>
    );
  } else {
    return (
      <></>
    )
  }
}}

export default Poem;
