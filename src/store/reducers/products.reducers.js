import productData from '../../data/products.json';

const products = productData;

const productsReducers = (state = products, action) => {
    switch(action.type){
        case 'ADD_PRODUCT': {

        }
        case 'REMOVE_PRODUCT': {

        }
        case 'LIST_PRODUCTS': {

        }
        default: 
            return state
    }
}

export default productsReducers;