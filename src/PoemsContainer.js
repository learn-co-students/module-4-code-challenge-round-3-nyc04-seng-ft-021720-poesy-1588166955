import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  state = {
    favorites: [],
    favoritesview: false
  }


toggleFavoriteView = () => {
  this.setState({
    favoritesview: !this.state.favoritesview
  })
}


  render() {
    console.log(this.props.poems)
    let button
    let poems
    if(this.state.favoritesview){
      button = <button onClick={this.toggleFavoriteView}>View All Poems</button>
      poems = this.state.favorites
    } else {
      button = <button onClick={this.toggleFavoriteView}>View Favorite Poems</button>
      poems = this.props.poems
    }
    return (
      <div className="poems-container">
      {button}
        {
          poems.map(poem => <Poem poem={poem} key={poem.content}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
