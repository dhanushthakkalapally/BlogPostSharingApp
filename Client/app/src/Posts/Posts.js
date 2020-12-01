import React , {Component} from 'react'
import Post from '../Post/Post'
import {withRouter} from 'react-router-dom';

class Posts extends Component{

    render(){


        return (
       this.props.PostsDetails.map((post,index)=>{
         return  <Post  key = {index}  Date  = {post.createdAt} Title = {post.Title} Description = {post.Description}/>})
        )




    }










}


export default withRouter(Posts);

