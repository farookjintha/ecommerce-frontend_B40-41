export const addCategory = (category) => {
    return {
        type: 'ADD_CATEGORY',
        data: category
    }
}

export const removeCategory = (category) => {
    return {
        type: 'REMOVE_CATEGORY',
        data: category
    }
}

export const listCategories = () => {
    return {
        type: 'LIST_CATEGORIES'
    }
}