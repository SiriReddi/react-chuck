import React, {Component} from "react";
import {loadData} from "../utils/loadData";


class Category extends Component {
    state = {
        category : []
    };


    async componentDidMount() {
        this.getCategories();
        
    }

    getCategories = async ()=>{

        const category = await loadData(` https://api.chucknorris.io/jokes/categories`);
    
        this.setState({
                 category
            });

    };
    
    
    

    handleChange = event => {

        console.log("props are:", this.props);
        
        this.props.changeCategory(event.target.value);
        
        
      };

    

    render() {

        const { category} = this.state;
        const {options} = this.props;
        
   
        return(
            <label>
                <select onChange={this.handleChange}>
                    {category.map((category, id) => {
                        return (
                            <option 
                                key ={`category-${id}`}
                                value={category}
                                selected={
                                    category == options ? true : false
                                }
                                >
                                    {category} 
                            </option>
                        
                        );
                    })}
        
                </select>
            </label>
        );
    }
}

export default Category;