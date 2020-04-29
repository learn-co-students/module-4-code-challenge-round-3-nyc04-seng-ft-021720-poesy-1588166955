import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  state = {
    // favorites: [],
    favoritesView: false
  }


toggleFavoriteView = () => {
  this.setState({
    favoritesView: !this.state.favoritesView
  })
}


  render() {
    console.log(this.props.poems)
    let button
    if(this.state.favoritesView){
      button = <button onClick={this.toggleFavoriteView}>View All Poems</button>
    } else {
      button = <button onClick={this.toggleFavoriteView}>View Favorite Poems</button>
    }
    return (
      <div className="poems-container">
      {button}
        {
          this.props.poems.map(poem => <Poem poem={poem} key={poem.content} favoritesView={this.state.favoritesView} /> )
        }
      </div>
    );
  }
}

export default PoemsContainer;
