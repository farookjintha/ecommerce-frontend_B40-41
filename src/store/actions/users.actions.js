export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        data: user
    }
}

export const removeUser = (user) => {
    return {
        type: 'REMOVE_USER',
        data: user
    }
};

export const listUsers = () => {
    return {
        type: 'LIST_USERS'
    }
}