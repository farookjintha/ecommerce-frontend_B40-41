import categoryData from '../../data/categories.json';

const categories = categoryData

const categoriesReducer = (state = categories, action) => {
    switch(action.type){
        case 'ADD_CATEGORY': {

        }
        case 'REMOVE_CATEGORY': {

        }
        case 'LIST_CATEGORIES': {

        }
        default: 
            return state
    }
}

export default categoriesReducer;