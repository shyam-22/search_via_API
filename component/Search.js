import React,{Component} from "react";
import axios from 'axios';
import Product from "../component/Product";

class Search extends Component
{
    constructor(props)
    {
        super();
        this.state={
            change :"",
            products: []

        };
    };
// we can use below method also 

    // fetchInputData=(event) =>
    // {
    //     console.log(event.target.value);
    //     this.setState({change: event.target.value});
    // };
formSubmit = async(event)=>
{
    event.preventDefault();
    let item= await axios.get(`https://pixabay.com/api/?key=14625994-aa9574ef77193ce59b58c7f5b&q=${this.state.change}&image_type=photo&pretty=true`);
    this.setState({products: item.data});
}

    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form  style={{marginTop:"20px"}} onSubmit={this.formSubmit}>
                            <div className="form-group">
                            <input type="text" placeholder="what u want .....search here" 
                            className="form-control" value={this.state.change}
                            onChange = {(e)=> this.setState({change:e.target.value})}

                            //we define in just one line ......& make it more simple
                            />

                            </div>
                        
                        </form>
                    </div>
                </div>
      
<div className="row">
    <div className="col-md-12">
        <Product pro = {this.state.products} />
    </div>
    </div>     
</div>
        )
    }
};

export default Search;