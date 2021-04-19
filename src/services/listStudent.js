import axios from 'axios'
const listStudent = ({
    source
}) => axios
    .get('https://dvtbccva71.execute-api.us-east-1.amazonaws.com/dev/list-student', {
        cancelToken: source.token
    }).then((students) => {
        console.debug('Students retrieved successfully', students)
        return Promise.resolve(students.data.studentList || [])
    })
    .catch((error) => {
        console.error('An error occured while retrieving all students: ', error)
        return Promise.reject({})
    })

export default listStudent