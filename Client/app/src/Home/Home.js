import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import Posts from "../Posts/Posts";
import axios from 'axios';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            componentMount: false
        };
    }

  componentDidMount() {
        axios.get('/posts/allPosts',{params : {userId: this.props.auth.userId}}).then( res => {
            this.setState({
                ...this.state,
                posts : res.data.data,
                componentMount: true
            })
        }).catch(err => {
            this.setState({
                ...this.state,
                componentMount: true,
                error: true
            })
        })

    }

    render() {
        return (
            <div style={{width: '100%'}}>
                {!this.state.componentMount && <div className='container mt-3 text-center'><i className="fas fa-4x fa-spinner fa-pulse"></i></div>}

                {this.state.componentMount && this.state.posts.length > 0  && <Posts PostsDetails = {this.state.posts}  />}

                {this.state.componentMount && !this.state.error && this.state.posts.length === 0  &&
                    <div>
                <div className='text-center mt-3'>

                    <span className='h2'>No Posts to Show <i className="far fa-frown-open"></i> Click Below to Connect</span>
                </div>
                    <div className='text-center mt-3'>
                        <Link  to='/connect' className='btn btn-info'>Connect</Link>
                    </div>
                    </div>
                }

                {this.state.error && <div className='text-center mt-3'> <span className='text-danger h2 '>unknown error occurred while fetching the posts please try again later</span> </div>}


            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
       ...state
    }
}


export default connect(mapStateToProps,null)(Home);
