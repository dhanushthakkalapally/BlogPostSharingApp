import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";
class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            userDetails: {},
            Posts: []

        }
    }



    componentDidMount() {

       const userId = this.props.auth.userId
       axios.get('users/',{params:{userId: userId}}).then(response => {
           this.setState({
               ...this.state,
               userDetails : response.data
           })
       })
       axios.get('posts/',{params:{userId: userId}}).then(response => {
           this.setState({
               ...this.state,
               Posts : response.data.posts
           })
       })


    }

    render () {
        return (
            <div>
            <Profile userDetails = {this.state.userDetails}  onFollowHandler={this.onFollowHandler} />
                <Posts PostsDetails={this.state.Posts} />
            </div>
        );

    }


}




const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(UserProfile);
