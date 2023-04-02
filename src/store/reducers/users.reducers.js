import userData from '../../data/users.json';

const users = userData;

const userReducer = (state = users, action) => {
    switch(action.type){
        case 'ADD_USER': {

        }
        case 'REMOVE_USER': {

        }
        case 'LIST_USERS': {

        }
        default: 
            return state
    }
}

export default userReducer;