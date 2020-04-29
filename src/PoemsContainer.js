import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
    
    renderPoemObjs = () => {
        return this.props.poemObjs.map(poemObj => {
            return <Poem key={poemObj.id} poemObj={poemObj} deletePoem={this.props.deletePoem} /> 
        })
    }

    render() {
        // console.log(this.props.poemObjs)
        return (
        <div className="poems-container">
            {this.renderPoemObjs()}
        </div>
        );
    }
}

export default PoemsContainer;



