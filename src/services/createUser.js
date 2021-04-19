import axios from 'axios'

const createStudent = ({
    username,
    password,
    source
}) => axios
    .post(`https://dvtbccva71.execute-api.us-east-1.amazonaws.com/dev/create-user/${username}`, {
        username,
        password
    }).then((user) => {
        console.debug('User was created successfully!', user)
        return Promise.resolve(user)
    })
    .catch((error) => {
        console.error(`An error occured while creating user: ${username}`, error)
        return Promise.reject([])
    })

export default createStudent