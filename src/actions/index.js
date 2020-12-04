export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const ADD_NEWS = 'ADD_NEWS'
export const DELETE_NEWS = 'DELETE_NEWS'
export const APPROVE = 'APPROVE'


export const loginAction = (login, password) => ({
    type: LOGIN,
    payload: {
        login,
        password
    }
})
export const logoutAction = () => ({
    type: LOGOUT
})

export const deleteNewsAction = (id) => ({
    type: DELETE_NEWS,
    payload: id
})

export const addNewsAction = (title, content, date) => ({
    type: ADD_NEWS,
    payload: {
        title,
        content,
        date
    }
})

export const approveAction = (id) => ({
    type: APPROVE,
    payload: id
})