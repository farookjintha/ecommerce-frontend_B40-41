export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        data: product
    }
};

export const removeProduct = (product) => {
    return {
        type: 'REMOVE_PRODUCT',
        data: product
    }
}

export const listProducts = () => {
    return {
        type: 'LIST_PRODUCTS'
    }
}