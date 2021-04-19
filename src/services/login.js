

import axios from 'axios'

const loginUser = ({
    username,
    password,
}) => axios
    .get(`https://dvtbccva71.execute-api.us-east-1.amazonaws.com/dev/signin-user/${username}`, {
        params: {
            username,
            password,
        }
    }).then((user) => {
        console.debug('User log in successfully', user)
        return Promise.resolve(user.data.user.Item)
    })
    .catch((error) => {
        console.error(`An error occured while retrieving user:${username}`, error)
        return Promise.reject({})
    })

export default loginUser