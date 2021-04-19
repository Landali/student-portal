import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import listStudent from '../services/listStudent'
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
        const products = [{
            id: '1',
            firstname: 'Allan',
            lastname: 'Paz'
        },
        {
            id: '2',
            firstname: 'Danilo',
            lastname: 'Paz'
        }
        ]
        return (
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={studentList}
                    columns={columns}
                    defaultSorted={defaultSorted}
                />
            </div >
        )
    }
}

export default studentList