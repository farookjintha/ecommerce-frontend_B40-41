import { combineReducers } from "redux";

import cartReducer from "./cart.reducers";
import categoriesReducer from "./categories.reducers";
import userReducer from "./users.reducers";
import productsReducers from "./products.reducers";

const allReducers = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
    users: userReducer,
    products: productsReducers
});

export default allReducers;