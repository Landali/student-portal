import React, { Component } from 'react'
import axios from 'axios';
import getStudent from '../services/getStudentbyId'
import LoadingOverlay from 'react-loading-overlay'
import BeatLoader from 'react-spinners/BarLoader'
import { isEmpty } from 'lodash'
class studentDiploma extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {},
            loading: true
        }

    }
    signal = axios.CancelToken.source();

    componentWillMount = async () => {
        const studentId = window.location.pathname.split('/')
        const student = await getStudent({ ID: studentId[2], source: this.signal }).catch((error) => {
            console.error('Error to Retrieve Student List:', error);
            return [];
        })
        console.debug('Student Retrieved: ', student);
        this.setState({ student, loading: false })
    }
    render() {
        const { student, loading } = this.state
        const date = new Date().toLocaleDateString()

        const diplomaBody = <div style={{ width: '750px', height: '100%', padding: '20px', textAlign: 'center', border: '5px solid #00DED6 ' }}>
            <span style={{ fontSize: '50px', fontWeight: 'bold' }}>Certificate of Completion</span>
            <br></br>
            <span style={{ fontSize: '25px' }}><i>This is to certify that</i></span>
            <br></br>
            <span style={{ fontSize: '30px' }}><b>{`${student.firstname} ${student.lastname}`}</b></span><br /><br />
            <span style={{ fontSize: '25px' }}><i>has completed all Courses</i></span> <br />
            <br />
            <span style={{ fontSize: '20px' }}>with score of <b>100%</b></span>
            <br /><br /><br /><br />
            <span style={{ fontSize: '25px' }}><i>Awarded on:</i></span><br></br>
            <span style={{ fontSize: '30px' }}>{`${date}`}</span>
        </div>

        const noStudentData = <div style={{ width: '750px', height: '100%', padding: '20px', textAlign: 'center', border: '5px solid #00DED6 ' }}></div>

        const overlay = <LoadingOverlay
            active={loading}
            spinner={<BeatLoader color={"blue"} />}
            text={'Loading Student Diploma...'}
        >
            {isEmpty(student) ? noStudentData : diplomaBody}
        </LoadingOverlay>

        return (
            <div>
                <a
                    type="button" class="btn btn-primary"
                    href="/view-student"
                    style={{ marginRight: "-47%" }}>Return to Student List
            </a>
                <br></br><br></br>
                < div className='container-fluid' style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
                    <div style={{ margin: '0 auto', width: '800px', height: '100%', padding: '20px', textAlign: 'center', border: '5px solid #00DED6', outline: '5px solid #7979F7' }}>
                        {overlay}
                    </div>
                </div >
            </div>

        )
    }
}

export default studentDiploma