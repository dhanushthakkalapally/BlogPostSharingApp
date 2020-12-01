import React,{Component} from 'react';
import './Signup.css'
import axios from 'axios';


class Signup extends Component{
constructor(props,context) {
    super(props,context);
this.state = {
    email : '',
    username : '',
    password :''
}

}

    emailChangehandler = (event)=>{
                this.setState({
                    ...this.state,
                    email :event.target.value
                })
    }

    usernameChangeHandler = (event) => {
        this.setState({
            ...this.state,
            username :event.target.value
        })

    }

    passwordChangeHandler = (event) => {
        this.setState({
            ...this.state,
           password:event.target.value
        })
    }


   formSignupHandler = (event) => {
    event.preventDefault();
             axios.post('/users',this.state).then(response => {
                 if (response.status == 200){
                    this.props.history.push({pathname:'/login'})
                 }

             }).catch(error => {
                 alert("unknown error occured");
                 console.log(error)
             })
    }

    render() {

    return(
        <div className='container size mt-4 mr-5'>
        <form onSubmit={this.formSignupHandler}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={(event)=>{this.emailChangehandler(event)}}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="username">User name</label>
                <input type="username" className="form-control" id="username" value={this.state.username} onChange={(event)=>{this.usernameChangeHandler(event)}}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value = {this.state.password} onChange={(event)=>{this.passwordChangeHandler(event)}} />
            </div>

            <button type="submit" className="btn btn-primary">Signup</button>
        </form>
        </div>);
    }


}

export default Signup;
