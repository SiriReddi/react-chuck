import React, {Component} from 'react';
import Quote from "./components/quotes";
import './App.css';

class App extends Component{

  state = {
      //category: "dev"
      category: []
  };

  changeCategory = (event) => {
    this.setState({
      category: "sport",
      
    });
  };

  handleChange = (event) => {
    this.setState({

      value: event.target.value
    });
  };


  render(){
    const {category} = this.state;
  return (
    <div className="App">
    
          <Quote category ={category}/> 
          <button onClick ={() => this.changeCategory()}>
            change Category
          </button>
          <select value ={this.state.value} onChange={this.handleChange}>
            <option value ="dev"></option>
            <option value ="sport"></option>
            <option value="movies"></option>
          </select>
        
        
    </div>
  );
}
}

export default App;
