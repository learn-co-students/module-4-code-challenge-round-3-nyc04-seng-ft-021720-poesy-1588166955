import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  
    state = {
        poemObjs: [],
        showNewPoemForm: false
    }

    componentDidMount = () => {
        fetch("http://localhost:6001/poems")
            .then(response => response.json())
            .then(poemData => this.setState({poemObjs: poemData}))
    }

    toggleNewPoemForm = (event) => { // I have a habit of putting event in the args just so I know I have access to it, if this is not okay let me know
        this.setState(prevState => {
            return { showNewPoemForm: !prevState.showNewPoemForm }
        })
    }

    submitNewPoem = (poemObj) => {
        // console.log(poemObj)
        fetch("http://localhost:6001/poems", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(poemObj)
        })
        .then(response => response.json())
        .then(poemObj => {
            this.setState(prevState => ({
                poemObjs: [...prevState.poemObjs, poemObj]
            }))
        })
    }

    deletePoem = (poemId) => {
        // console.log(poemId)
        fetch(`http://localhost:6001/poems/${poemId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(() => {
            this.setState(prevState => {
                const updatesPoemObjs = prevState.poemObjs.filter(poemObj => {
                    return poemObj.id !== poemId
                })
                return {
                    poemObjs: updatesPoemObjs
                }
            })
        })
    }

    render() {
        return (
        <div className="app">
            <div className="sidebar">
            <button onClick={this.toggleNewPoemForm}>Show/hide new poem form</button>
            {this.state.showNewPoemForm ? <NewPoemForm submitNewPoem={this.submitNewPoem}/> : null}
            
            </div>
            <PoemsContainer poemObjs={this.state.poemObjs} deletePoem={this.deletePoem}/>
        </div>
        );
    }
}

export default App;



//       /  PoemsContainer < Poem
//  APP <-  Favorites
//       \  NewPoemForm