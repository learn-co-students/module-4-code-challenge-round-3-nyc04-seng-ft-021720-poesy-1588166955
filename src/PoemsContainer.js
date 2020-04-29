import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  // state = {
  //   poems: []
  // }


  //fetch

  // componentDidMount() {
  //   fetch("http://localhost:6001/poems")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           poems: result
  //         })
  //       }
  //     )
  // }


  render() {
    console.log(this.props.poems)
    return (
      <div className="poems-container">
        {
          this.props.poems.map(poem => <Poem poem={poem} key={poem.content}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
