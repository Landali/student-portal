import React, { Component } from 'react'
import '../css/createStudent.css'
import FormInput from '../components/FormInputs/formInput'
import FormButton from '../components/FormButton/formButton'
import createNewStudent from '../services/createStudent'
import axios from 'axios'
class createStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
        }
    }

    signal = axios.CancelToken.source();

    updateField = (e) => {
        let value = e.target.value;
        value = value.replace(/[^A-Za-z]/gi, "");
        this.setState({
            firstname: value
        });
    }

    handleLastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    handleCreateSubmit = async (e) => {
        let { firstname, lastname } = this.state
        e.preventDefault();
        console.log("firstname", firstname)
        console.log("lastname", lastname)
        if (firstname === '' || lastname === '') {
            console.warn('No valid user Information detected!')
        } else {
            await createNewStudent({
                firstname,
                lastname,
                source: this.signal
            }).then((student) => {
                console.log('student created!', student)
                const origin = window.location.origin
                window.location.replace(`${origin}/view-student`)
            }).catch((error) => {
                console.error('An error occured while creating a student: ', error)
            })

        }
    }

    onKeyPress(event) {
        return (event.charCode >= 65 && event.charCode <= 90) ||
            (event.charCode >= 97 && event.charCode <= 122);
    };

    render() {

        let {
            firstname,
            lastname
        } = this.state

        let firstInput = <FormInput
            inputContainerId={"createInput"}
            inputContainerClass={"input-field"}
            inputValue={firstname}
            inputType={"user"}
            //inputId={"registerUsername"}
            inputId={"createFirstname"}
            inputClass={"form-control"}
            inputPlaceholder={"Firstname"}
            onChangeInput={this.updateField}
            inputRequired={true}
            inputAutoFocus={true}
            inputText={"Firstname"}
        />

        let lastnameInput = <FormInput
            inputContainerId={"createInput"}
            inputContainerClass={"input-field"}
            inputValue={lastname}
            inputType={"user"}
            // inputId={"registerPassword"}
            inputId={"createLastname"}
            inputClass={"form-control"}
            inputPlaceholder={"Lastname"}
            onChangeInput={this.handleLastname}
            inputRequired={true}
            inputAutoFocus={true}
            inputText={"Lastname"}
        />

        let createButton = <FormButton
            buttonId={"createButton"}
            buttonClass={"btn btn-lg btn-primary btn-block text-uppercase"}
            buttonType={"submit"}
            buttonText={"Create"}
            enableClick={false}
            buttonEnable={firstname === '' || lastname === '' ? false : true}
        />

        return (
            <div id="createStudentContainer" >
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div id="cardCreateStudent" className="card card-signin createStudent my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">New Student</h5>
                                    <form id="registerForm" onSubmit={this.handleCreateSubmit} className="form-signin">
                                        {firstInput}
                                        {lastnameInput}
                                        {createButton}
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

export default createStudent