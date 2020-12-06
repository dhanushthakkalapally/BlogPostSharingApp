import React,{Component} from "react";
import axios from 'axios';

class Read extends Component {
    constructor() {
        super();
        this.state = {
            title : '',
            description: '',
            cm: false
        }
    }
    componentDidMount() {

        axios.get('/posts/getPost',{params: {postId: this.props.match.params.id}}).then (response => {
       if (response.data === '') {
           this.setState({
               ...this.state,
               cm: true,
               error:true
           })
       } else {
           this.setState({
               ...this.state,
               title: response.data.Title,
               description: response.data.Description,
               cm: true
           })
       }
        }).catch(err => {
            console.log(err)
            this.setState({
                ...this.state,
                error: true,
                cm:true
            })
        })

    }

    render() {
       return(
           <div>
               {!this.state.cm && <div className='text-center mt-3'><i className="fas fa-4x fa-spinner fa-pulse"></i>
               </div>}
           {this.state.cm && !this.state.error && <div>
           <h1 className='text-center'>{this.state.title}</h1>
           <p className='text-secondary text-center'>{this.state.description}</p>
        </div>}

               {this.state.cm && this.state.error && <div className='mt-3 text-center'><span className='h2 text-danger'>Unable to Fetch the Specified Post. <i
                   className="far fa-frown"></i></span></div>}
           </div>
    )
    }
}

export default Read;
