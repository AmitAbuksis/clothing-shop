import React from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebaseUtils';
import { signInWithFacebook } from '../../firebase/firebaseUtils';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange =(event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I alredy have and acount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                    required />
                    
                    <FormInput 
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password"
                    required />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIN> Sign In With Google</CustomButton>
                        <CustomButton onClick={signInWithFacebook} isFacebookSignIn> Sign In With Facebook</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;