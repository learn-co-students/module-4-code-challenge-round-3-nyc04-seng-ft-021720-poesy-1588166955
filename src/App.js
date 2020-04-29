import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    form: false,
    poems: []
  }

  componentDidMount() {
    fetch("http://localhost:6001/poems")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            poems: result
          })
        }
      )
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

  renderNew = (poem) => {
    console.log(poem)
    const newArray = this.state.poems
    newArray.push(poem)
    this.setState({
      poems: newArray
    })
  }

  render() {
    let formRender
    if(this.state.form){
      formRender = <NewPoemForm renderNew={this.renderNew}/>
    } else {
      formRender = <br/>
    }
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {formRender}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
