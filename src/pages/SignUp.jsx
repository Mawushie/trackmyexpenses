import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpAction } from '../actions/authActions'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }

    handleOnChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = () =>{
        this.props.signUpAction(this.state.email, this.state.password)
        this.setState({
            username : '',
            email : '',
            password : ''
        })
    }
    render() {
        return (
            <div className = 'container'>
                <div className = 'row'>
                    <form>
                        <h4>Sign Up</h4>
                        <label>Username</label><br></br>
                        <input type = 'text' name = 'username' value = {this.state.username} onChange = {this.handleOnChange} /> <br></br>

                        <label>Email</label><br></br>
                        <input type = 'text' name = 'email' value = {this.state.email} onChange = {this.handleOnChange} /><br></br>

                        <label>Password</label><br></br>
                        <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.handleOnChange} /><br></br><br></br>

                        <button type = 'button' onClick = {this.handleOnSubmit}>Sign Up</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    signUpAction
}

export default connect(null, mapDispatchToProps)(SignUp)
