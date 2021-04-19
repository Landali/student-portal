import React, { Component } from 'react'
import '../css/signup.css'
import FormInput from '../components/FormInputs/formInput'
import FormButton from '../components/FormButton/formButton'

class signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            repeatPassword: ''
        }
    }

    /**
     * * Used for username input only
     * * General:
     * @param value gets the captured input target value.
     * * value.replace, all chars that arent letters will be replaced with " ".
     * * Input(Handles) Functions:
     * @param updateField used to handle the onChange event in the username input.
     * @param handlePassword used to handle the onChange event in the password input.
     * @param handleRepeatPassword used to handle the onChange event in the repeat password input.
     */
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

    /**
     * * This function handles the form onSubmit event.
     * @param handleRegisterSubmit when register button is click it will create a new user.
     * *Variables:
     * @param e.preventDefault prevents the inputs from loosing its current values (only used while testing functionality).
     * 
     */

    handleRegisterSubmit = async (e) => {
        let { username, password, repeatPassword } = this.state
        e.preventDefault();
        console.log("username", username)
        console.log("password", password)
        if (password !== repeatPassword) {
            console.log("password arent the same")
             // Add Notification for repeated password
        } else {
            const origin = window.location.origin
            window.location.replace(`${origin}`)
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

        /**
         ** Controls
         *@param usernameInput displays a form input for the username.
         *@param passwordInput displays a form input for the password.
         *@param repeatPasswordInput displays a form input to repeat password and validate if password is correct.
         *@param buttonLogin displays form submit button.
         ** All input and button props will be explain inside each component:
         *@param FormInput
         *@param FormButton
         */

        let usernameInput = <FormInput
            inputContainerId={"registerInput"}
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
            inputContainerId={"registerInput"}
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
            inputContainerId={"registerInput"}
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
            buttonId={"registerButton"}
            buttonClass={"btn btn-lg btn-primary btn-block text-uppercase"}
            buttonType={"submit"}
            buttonText={"Sign Up"}
            enableClick={false}
            buttonEnable={username === '' || password === '' || repeatPassword === '' ? false : true}
        />

        return (
            <div id="registerContainer" >
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div id="cardRegister" className="card card-signin register my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign Up</h5>
                                    <form id="registerForm" onSubmit={this.handleRegisterSubmit} className="form-signin">
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