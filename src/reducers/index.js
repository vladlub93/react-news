import {
    LOGIN,
    LOGOUT,
    ADD_NEWS,
    DELETE_NEWS,
    APPROVE
} from '../actions/index'

const initialState = {
    users: [{
        login: 'admin',
        password: 'admin',
        role: 'admin'
    }, {
        login: 'user',
        password: 'user',
        role: 'user'
    }],
    user: null,
    news: {
        approved: [{
                id: 0,
                title: 'Topic 1',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, dolores.',
                date: new Date()
            },
            {
                id: 1,
                title: 'Topic 2',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt',
                date: new Date()
            },
            {
                id: 2,
                title: 'Topic 3',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
                date: new Date()
            },
            {
                id: 3,
                title: 'Topic 4',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing',
                date: new Date()
            },
        ],
        toApprove: []
    },
}

const findUser = (state, {
    login,
    password
}) => {
    return state.users.find(u => u.login === login && password)
}

const removeNews = (state, id) => {
    const news = state.news
    news.approved = news.approved.filter(n => n.id !== id)
    news.toApprove = news.toApprove.filter(n => n.id !== id)
    const newNews = {
        approved: news.approved,
        toApprove: news.toApprove
    }
    return newNews
}

const addToApprove = (state, payload) => {
    state.news.toApprove.push({
        id: new Date().getTime(),
        ...payload
    })
    return {
        ...state.news
    }
}

const toApprove = (state, id) => {
    const news = state.news
    const toApprove = news.toApprove.find(n => n.id === id)
    news.toApprove = news.toApprove.filter(n => n.id !== id)
    news.approved.push(toApprove)
    return {
        ...news
    }
}


const reducer = (state = initialState, action) => {
    console.log(action, state)
    switch (action.type) {
        case LOGIN:
            const user = findUser(state, action.payload)
            return {
                ...state,
                user
            }

        case LOGOUT:
            return {
                ...state,
                user: null
            }
        case DELETE_NEWS:
            return {
                ...state,
                news: removeNews(state, action.payload)
            }
        case ADD_NEWS:
            return {
                ...state,
                news: addToApprove(state, action.payload)
            }
        case APPROVE:
            return {
                ...state,
                news: toApprove(state, action.payload)
            }
        default:


            return {
                ...state,
                user: null
            }


    }
}

export default reducer