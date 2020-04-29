import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  
 
  render() {

    let arrayOfComponent = this.props.poems.map((singlePoem) => {
      return <Poem
      key={singlePoem.id}
      poem={singlePoem}
       />
    })
    
    return (
      <div className="poems-container">
        {
          arrayOfComponent
        }
      </div>
    );
  }
}

export default PoemsContainer;
