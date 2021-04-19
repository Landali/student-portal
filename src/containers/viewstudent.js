import React, { Component } from 'react'
import '../css/viewStudent.css'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import listStudent from '../services/listStudent'
import FormInput from '../components/FormInputs/formInput'
import FormButton from '../components/FormButton/formButton'
class studentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: []
        }

    }


    signal = axios.CancelToken.source();

    componentWillMount = async () => {
        const studentList = await listStudent({ source: this.signal }).catch((error) => {
            console.error('Error to Retrieve Student List:', error);
            return [];
        })
        console.debug('Student Retrieved: ', studentList);
        this.setState({ studentList })
    }


    render() {

        const { studentList } = this.state;
        const columns = [{
            dataField: 'firstname',
            text: 'Firstname',
            formatter: (cell, row, rowIndex, extraData) => {
                return (
                    <div>
                        <a href={`/view-diploma/${row.ID}`}>{row.firstname}</a>
                    </div>
                )
            },
            sort: true
        }, {
            dataField: 'lastname',
            text: 'Lastname',
            sort: true
        }];
        const defaultSorted = [{
            dataField: 'name',
            order: 'desc'
        }];

        let createStudentButton = <a
            id='createStudentButton'
            className='btn btn-lg btn-primary btn-block text-uppercase'
            href="/create-student"
            style={{ marginRight: "-60%" }}>Create Student
        </a>

        return (
            <div id="viewStudentContainer" >
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div id="cardViewStudent" className="card card-signin viewStudent my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{ fontSize: '30px', fontWeight: 'bold' }}>List of Students</h5>
                                    <div id="viewStudentTable">
                                        {createStudentButton}
                                        <BootstrapTable
                                            bootstrap4
                                            keyField="id"
                                            data={studentList}
                                            columns={columns}
                                            defaultSorted={defaultSorted}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default studentList