import React, {Component} from "react";
import {loadData} from "../utils/loadData";

class Category extends Component {
    state = {
        category : []
    };


    async componentDidMount() {
        const category = await loadData(` https://api.chucknorris.io/jokes/random?category=${category}`);
    
        this.setState({
                 category
            });
    }

    

    handleChange = (event) => {
        const selectedValue= event.target.value;
        this.props.onSelectChange(selectedValue);
        
      };
    

    render() {

        //const { category} = this.state;
        const selectedData = this.props.selectedData;
        const options = selectedData.map((data)=>
                <option key ={data.id}
                         value={data.id}
                         >
                         {data.name}
                 </option>
        );
   
        return(
         
            <select onChange={this.handleChange}>
                <option>Select Category</option>
                {options}
            </select>
      
    //         {category.map((category, id) => {
    //                 return (
    //                  <option key ={id}
    //                      value={category.id}>{category.name} </option>
                    
    //                 );
    //             })}
    
            
       
    )
    
    

    }
}

export default Category;