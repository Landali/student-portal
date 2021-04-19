import React, { Component } from 'react'
import '../css/login.css'
import FormInput from '../components/FormInputs/formInput'
import FormButton from '../components/FormButton/formButton'

//const $ = window.$;
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
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
            [e.target.id]: e.target.value
        })
    }


    handleLoginSubmit = async (e) => {
        let { username, password } = this.state
        e.preventDefault();
        console.log("username", username)
        console.log("password", password)
        const origin = window.location.origin
        window.location.replace(`${origin}/view-student`)
    }

    onKeyPress(event) {
        return (event.charCode >= 65 && event.charCode <= 90) ||
            (event.charCode >= 97 && event.charCode <= 122);
    };


    render() {
        let {
            username,
            password
        } = this.state


        let usernameInput = <FormInput
            inputContainerId={"loginInput"}
            inputContainerClass={"input-field"}
            inputValue={username}
            inputType={"user"}
            inputId={"username"}
            inputClass={"form-control"}
            inputPlaceholder={"Username"}
            onChangeInput={this.updateField}
            inputRequired={true}
            inputAutoFocus={true}
            inputText={"Username"}
        />

        let passwordInput = <FormInput
            inputContainerId={"loginInput"}
            inputContainerClass={"input-field"}
            inputValue={password}
            inputType={"password"}
            inputId={"password"}
            inputClass={"form-control"}
            inputPlaceholder={"Password"}
            onChangeInput={this.handlePassword}
            inputRequired={true}
            inputAutoFocus={false}
            inputText={"Password"}
        />

        let buttonLogin = <FormButton
            buttonId={"loginButton"}
            buttonClass={"btn btn-lg btn-primary btn-block text-uppercase"}
            buttonType={"submit"}
            buttonText={"Sign in"}
            enableClick={false}
            buttonEnable={username === '' || password === '' ? false : true}
        />

        return (

            <div id="lognContainer">
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div id="cardLogin" className="card card-signin login my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign In</h5>{/*TODO: CHANGE FOR I18N */}
                                    <form
                                        id="loginForm"
                                        onSubmit={this.handleLoginSubmit}
                                        className="form-signin">

                                        {usernameInput}
                                        {passwordInput}
                                        {buttonLogin}

                                        <hr id="loginhr"></hr>
                                        <a
                                            href="/sign-up"
                                            style={{ marginRight: "-60%" }}>Don't have a user?
                                            </a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Login