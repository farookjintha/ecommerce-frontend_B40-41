const cart = [];

const cartReducer = (state = cart, action) => {
    switch(action.type){
        case 'ADD_TO_CART': {
            console.log('Adding product to cart...', action.data);
            const existingItem = state.find(product => product.id === action.data.id);
            let updateItem;
            let updateCart = state;
            if(existingItem){
                updateItem = {...existingItem, quantity: existingItem.quantity + 1};
                let indexOfProduct = state.findIndex(product => product.id === action.data.id);
                updateCart[indexOfProduct] = updateItem;
            }else{
                updateItem = {...action.data, quantity: 1};
                updateCart = [...updateCart, {...updateItem}]
            }
            console.log('Updated Cart: ', updateCart)
            return updateCart;
        }
        case 'REMOVE_FROM_CART': {
            return state.filter(product => product.id !== action.data.id);
        }
        case 'EMPTY_CART': {
            return []
        }
        default: 
            return state
    }

}

export default cartReducer;