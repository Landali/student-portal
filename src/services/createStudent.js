//https://dvtbccva71.execute-api.us-east-1.amazonaws.com/dev/create-student/{firstname}
import axios from 'axios'

const createStudent = ({
    firstname,
    lastname,
    source
}) => axios
    .post(`https://dvtbccva71.execute-api.us-east-1.amazonaws.com/dev/create-student/${firstname}`, {
        cancelToken: source.token,
        firstname,
        lastname
    }).then((student) => {
        console.debug('Student was created successfully!', student)
        return Promise.resolve(student)
    })
    .catch((error) => {
        console.error(`An error occured while creating student: ${firstname} ${lastname}`, error)
        return Promise.reject([])
    })

export default createStudent