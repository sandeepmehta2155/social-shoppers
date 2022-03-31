import axios from 'axios'

const configurations = {
    SET_CURRENT_USER: (data) => {
        if (data) {
            axios.defaults.headers.Authorization = data.token
            localStorage.setItem('currentUser', JSON.stringify(data))
            localStorage.setItem('token', data.token)
        } else {
            axios.defaults.headers.Authorization = ''
            localStorage.removeItem('currentUser')
            localStorage.removeItem('token')
        }
    },
    GET_CURRENT_USER: () => {
        return JSON.parse(localStorage.getItem('currentUser'))
    }
}

const users = {
    CREATE: (payload) => {
        return axios({
            url: '/users',
            data: payload,
            method: 'POST'
        })
    },
    LOGIN: (payload) => {
        return axios({
            url: '/users/login',
            data: payload,
            method: 'POST'
        })
    },
    LIST: () => {
        return axios({
            url: '/users',
            method: 'GET'
        })
    },
    READ: (id) => {
        return axios({
            url: '/users/' + id,
            method: 'GET'
        })
    },
    UPDATE: (data) => {
        return axios({
            url: '/users/' + data.id,
            method: 'PATCH',
            data: data.payload
        })
    }
}

const contacts = {
    CREATE: (payload) => {
        return axios({
            url: '/contacts',
            data: payload,
            method: 'POST'
        })
    },
    LIST: () => {
        return axios({
            url: '/contacts',
            method: 'GET'
        })
    },
    READ: (id) => {
        return axios({
            url: '/contacts/' + id,
            method: 'GET'
        })
    },
    UPDATE: (data) => {
        return axios({
            url: '/contacts/' + data.id,
            method: 'GET',
            data: data.payload
        })
    },
    DELETE: (id) => {
        return axios({
            url: '/contacts/' + id,
            method: 'DELETE'
        })
    }
}

const contactGroups = {
    CREATE: (payload) => {
        return axios({
            url: '/contactgroups',
            data: payload,
            method: 'POST'
        })
    },
    LIST: () => {
        return axios({
            url: '/contactgroups',
            method: 'GET'
        })
    },
    READ: (id) => {
        return axios({
            url: '/contactgroups/' + id,
            method: 'GET'
        })
    },
    UPDATE: (data) => {
        return axios({
            url: '/contactgroups/' + data.id,
            method: 'GET',
            data: data.payload
        })
    },
    DELETE: (id) => {
        return axios({
            url: '/contactgroups/' + id,
            method: 'DELETE'
        })
    }
}

const coCarts = {
    CREATE: (payload) => {
        return axios({
            url: '/cocarts',
            data: payload,
            method: 'POST'
        })
    },
    LIST: () => {
        return axios({
            url: '/cocarts',
            method: 'GET'
        })
    },
    READ: (id) => {
        return axios({
            url: '/cocarts/' + id,
            method: 'GET'
        })
    },
    UPDATE: (data) => {
        return axios({
            url: '/cocarts/' + data.id,
            method: 'GET',
            data: data.payload
        })
    },
    DELETE: (id) => {
        return axios({
            url: '/cocarts/' + id,
            method: 'DELETE'
        })
    },
    MY: () => {
        return axios({
            url: '/cocarts/my',
            method: 'GET'
        })
    },
    JOINED: () => {
        return axios({
            url: '/cocarts/joined',
            method: 'GET'
        })
    },
    PUBLIC: () => {
        return axios({
            url: '/cocarts/public',
            method: 'GET'
        })
    }
}

const products = {
    CREATE: (payload) => {
        return axios({
            url: '/products',
            data: payload,
            method: 'POST'
        })
    },
    LIST: () => {
        return axios({
            url: '/products',
            method: 'GET'
        })
    },
    READ: (id) => {
        return axios({
            url: '/products/' + id,
            method: 'GET'
        })
    },
    UPDATE: (data) => {
        return axios({
            url: '/products/' + data.id,
            method: 'GET',
            data: data.payload
        })
    },
    DELETE: (id) => {
        return axios({
            url: '/products/' + id,
            method: 'DELETE'
        })
    }
}

const members = {
    CREATE: (payload) => {
        return axios({
            url: '/members',
            data: payload,
            method: 'POST'
        })
    },
    LIST: () => {
        return axios({
            url: '/members',
            method: 'GET'
        })
    },
    READ: (id) => {
        return axios({
            url: '/members/' + id,
            method: 'GET'
        })
    },
    UPDATE: (data) => {
        return axios({
            url: '/members/' + data.id,
            method: 'GET',
            data: data.payload
        })
    },
    DELETE: (id) => {
        return axios({
            url: '/members/' + id,
            method: 'DELETE'
        })
    },
    JOIN: (payload) => {
        return axios({
            url: '/members/join',
            method: 'POST',
            data: payload
        })
    }
}

const chats = {
    CREATE: (payload) => {
        return axios({
            url: '/chats',
            data: payload,
            method: 'POST'
        })
    },
    LIST: () => {
        return axios({
            url: '/chats',
            method: 'GET'
        })
    },
    READ: (id) => {
        return axios({
            url: '/chats/' + id,
            method: 'GET'
        })
    },
    UPDATE: (data) => {
        return axios({
            url: '/chats/' + data.id,
            method: 'GET',
            data: data.payload
        })
    },
    DELETE: (id) => {
        return axios({
            url: '/chats/' + id,
            method: 'DELETE'
        })
    }
}

const messages = {
    SEND: (payload) => {
        return axios({
            url: '/messages',
            data: payload,
            method: 'POST'
        })
    },
    LIST: (id) => {
        return axios({
            url: '/messages/' + id,
            method: 'GET'
        })
    },
    READ: (id) => {
        return axios({
            url: '/messages/' + id,
            method: 'GET'
        })
    },
    UPDATE: (data) => {
        return axios({
            url: '/messages/' + data.id,
            method: 'GET',
            data: data.payload
        })
    },
    DELETE: (id) => {
        return axios({
            url: '/messages/' + id,
            method: 'DELETE'
        })
    },
    LISTBYCHAT: (id) => {
        return axios({
            url: '/messages/chat/' + id,
            method: 'GET'
        })
    }
}

const api = {
    users,
    contacts,
    contactGroups,
    coCarts,
    products,
    members,
    configurations,
    chats,
    messages
}
export default api
