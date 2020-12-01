import React from 'react'

const Post = (props) =>{

    return (
    <div className='container d-flex justify-content-around'><div style={{'width': '50%'}} className=" card m-3">
    <h5 className="  card-header"><p>Date:{props.Date}</p></h5>
    <div className="card-body">
    <h5 className="card-title">{props.Title}</h5>
    <p >{props.Description.substr(0,500)}</p>
     <a href="/" className="btn btn-primary m-1">Like</a>
        <a href="/" className="btn btn-danger m-1">Dislike</a>

    </div>
    </div>

    </div>


    )



}


export default Post;
