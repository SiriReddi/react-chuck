import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Wrapper from "./components/wrapper";
import Quote from "./components/quotes";
import CategoryList from "./components/categoryList";
import Category from "./components/category";

import 'bulma/css/bulma.css';
import './App.css';

// class App extends Component{

//   state={
//     categories: []
//   };

//   changeCategory = categories => {
//     this.setState({
//       categories
//     });
//   };

//   render() {
//     const { categories } = this.state;
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Chuck Norris Reacts!!!</h1>
//             </header>
//             <Quote categories={categories} />
//             <br />
//             <Category
//                 options={categories}
//                 changeCategory={categories => this.changeCategory(categories)}
//             />
//         </div>
//     );
// }

  // render(){
  //   const {category} = this.state;
   function App(){
    return (
      <div className="App">
        <header>
          <h1> Chuck Reacts!</h1>
        </header>
        <Router>
          <Wrapper>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact>
            <CategoryList />
          </Route> 
          {/* <Route path="/category/:category_name?"
                render={routeProps =>
                  <Quote {...routeProps} />}
                /> */}
            <Route path="/category/:category_name" component={Quote}/>
            {/* <Route path="/select">
              <Category 
                  options={category}
                  changeCategory={category => this.changeCategory(category)} 
              />
          </Route>  */}
          </Wrapper>
        </Router>
      </div>
    );
  }



export default App;
