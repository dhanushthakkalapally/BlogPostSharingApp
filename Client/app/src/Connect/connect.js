import React,{Component} from 'react';
import FriendCard from './FriendCard'
import axios from 'axios';
import {connect} from 'react-redux';

class Connect extends Component{

    constructor() {
        super();
        this.state =  {
            people: [],
            cm: false
        }
    }
    componentDidMount() {
        axios.get('users/getPeople',{params: {userId: this.props.auth.userId}}).then(res => {
            this.setState({
                ...this.state,
                people : res.data.people,
                cm: true
            })
            }
        )
    }

    render() {
        return(
          <div>
              {!this.state.cm && <div className='text-center mt-3'><i className="fas fa-4x fa-spinner fa-pulse"></i>
              </div>}
              {this.state.cm && this.state.people.map((user,index) => {
                return <FriendCard key = {user.id} id = {user.id} username = {user.username} description = {user.description}   />
            })}
              {this.state.cm && this.state.people.length === 0 && <div className='text-center mt-3'><span className='h2 '>You are all Caught up <i
                  className="far fa-smile-wink"></i> </span></div>}
           </div>


        )
    }

}

const mapStateToProps = state => {
    return {...state}
}

export default connect(mapStateToProps,null)(Connect);
