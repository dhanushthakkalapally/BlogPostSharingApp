import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class CreatePost extends Component {

    constructor() {
        super();
        this.state = {
            title : '',
            description: '',
        }
    }

    onTitleChange = (event) => {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    }

    onDescriptionChange = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value
        })
    }

    onPostSubmit = (event) => {
        event.preventDefault();
        axios.post('/posts/createPost',{userId: this.props.auth.userId,
            title: this.state.title,description: this.state.description}).then(response => {
                console.log(response);
        })

    }


    render = () => {

        return (
            <div className='container mt-5'>
                <h2 className='text-center'>Create Post</h2>
            <form onSubmit={this.onPostSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1"><h4>Title</h4></label>
                    <input type="input" value={this.state.title} onChange={this.onTitleChange} className="form-control" id="exampleFormControlInput1"
                           placeholder="The Great Story...!"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"><h4>Write Your Story</h4></label>
                    <textarea onChange={this.onDescriptionChange} value={this.state.description} className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="The Story Goes like this......"></textarea>
                </div>
                <button type = 'submit' className='btn btn-primary'>Submit</button>
            </form></div>

            )
    }




}
const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps,null)(CreatePost);
