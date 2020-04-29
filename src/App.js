import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

    state = {
      poems: [],
      clicked: false
    }

    componentDidMount(){
      fetch("http://localhost:6001/poems")
        .then(res => res.json())
        .then((arrayOfPoems) => {
          
          this.setState({
            poems: arrayOfPoems
          })
        })
    }

    handleForm = () => {
      this.setState({
        clicked: !this.state.clicked
      })
    }

    addOnePoem = (newPoem) =>{
        fetch("http://localhost:6001/poems", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPoem)
        })
          .then(res => res.json())
          .then((newPoemCreated) => {

              let copyOfPoems = [...this.state.poems, newPoemCreated]
                this.setState({
                  poems: copyOfPoems
                })
          })
    }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick= {this.handleForm}>Show/hide new poem form</button>
          {this.state.clicked && <NewPoemForm
          addOnePoem={this.addOnePoem}
          />}
        </div>
        <PoemsContainer
        poems={this.state.poems}
        />
      </div>
    );
  }
}

export default App;
