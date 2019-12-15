import React from "react";

const Product= (props) =>
{
    console.log(props);
        return(
            <div className="container">
                <div className="row">      
                    {
                        props.pro.hits.map( data => (
                                    
                                        <div className="col-md-3">
                                        <div className="card text-left">
                                                   <img class="card-img-top" src={data.largeImageURL} alt="data.tags"/>>
                                                   <div class="card-body">
                                <h4 class="card-title">{data.user}</h4>
                                <p class="card-text">Total Likes:{data.likes}</p>
                                                          </div>
                                                        </div>
                                                </div>
                                         
                                ))
                        }
                   
                </div>
            </div>
        )
};

export default Product;