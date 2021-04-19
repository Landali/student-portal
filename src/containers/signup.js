import React, { Component } from 'react'
import '../css/signup.css'
import FormInput from '../components/FormInputs/formInput'
import FormButton from '../components/FormButton/formButton'
import createUser from '../services/createUser'
class signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            repeatPassword: ''
        }
    }

    updateField = (e) => {
        let value = e.target.value;
        value = value.replace(/[^A-Za-z]/gi, "");
        this.setState({
            username: value
        });
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleRepeatPassword = (e) => {
        this.setState({
            repeatPassword: e.target.value
        })
    }


    handleRegisterSubmit = async (e) => {
        let { username, password, repeatPassword } = this.state
        e.preventDefault();
        console.log("username", username)
        console.log("password", password)
        if (password !== repeatPassword) {
            console.log("password arent the same")
            // Add Notification for repeated password
        } else {
            await createUser({ username, password }).then((user) => {
                console.log('User Created!')
                if (user.data.newUser) {
                    const origin = window.location.origin
                    window.location.replace(`${origin}`)
                }
            }).catch((error) => {
                console.error('Creating user error:', error)
            })

        }

    }

    onKeyPress(event) {
        return (event.charCode >= 65 && event.charCode <= 90) ||
            (event.charCode >= 97 && event.charCode <= 122);
    };

    render() {

        let {
            username,
            password,
            repeatPassword
        } = this.state

        let usernameInput = <FormInput
            inputContainerId={"signUpInput"}
            inputContainerClass={"input-field"}
            inputValue={username}
            inputType={"user"}
            inputId={"registerUsername"}
            inputClass={"form-control"}
            inputPlaceholder={"Username"}
            onChangeInput={this.updateField}
            inputRequired={true}
            inputAutoFocus={true}
            inputText={"Username"}
        />

        let passwordInput = <FormInput
            inputContainerId={"signUpInput"}
            inputContainerClass={"input-field"}
            inputValue={password}
            inputType={"password"}
            inputId={"registerPassword"}
            inputClass={"form-control"}
            inputPlaceholder={"Password"}
            onChangeInput={this.handlePassword}
            inputRequired={true}
            inputAutoFocus={true}
            inputText={"Password"}
        />

        let repeatPasswordInput = <FormInput
            inputContainerId={"signUpInput"}
            inputContainerClass={"input-field"}
            inputValue={repeatPassword}
            inputType={"password"}
            inputId={"repeatPassword"}
            inputClass={"form-control"}
            inputPlaceholder={"Repeat Password"}
            onChangeInput={this.handleRepeatPassword}
            inputRequired={true}
            inputAutoFocus={true}
            inputText={"Repeat Password"}
        />

        let registerButton = <FormButton
            buttonId={"signUpButton"}
            buttonClass={"btn btn-lg btn-primary btn-block text-uppercase"}
            buttonType={"submit"}
            buttonText={"Sign Up"}
            enableClick={false}
            buttonEnable={username === '' || password === '' || repeatPassword === '' ? false : true}
        />

        return (
            <div id="signupContainer" >
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div id="cardSignUp" className="card card-signin signUpUser my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign Up</h5>
                                    <form id="signUpForm" onSubmit={this.handleRegisterSubmit} className="form-signin">
                                        {usernameInput}
                                        {passwordInput}
                                        {repeatPasswordInput}
                                        {registerButton}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default signup