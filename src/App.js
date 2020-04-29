import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    form: false
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

  render() {
    let formRender
    if(this.state.form){
      formRender = <NewPoemForm />
    } else {
      formRender = <br/>
    }
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {formRender}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
