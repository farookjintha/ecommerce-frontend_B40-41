import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/actions/cart.actions";
import './cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)
    return (
        <div>
            <h2>Cart</h2>
            {
                cart.length ? 
                <div className="products-container">
                    {cart.map((product, index) => (
                        <div key={index} className="product">
                        <h2>{product.name}</h2>
                        <h3>Quantity: {product.quantity}</h3>
                        <h3>Total Amount: {product.price * product.quantity}</h3>
                        <button type="button" class="btn btn-danger" onClick={() => dispatch(removeFromCart(product))}>Remove from Cart</button>
                    </div>
                    ))}
                </div> : 
                <div>
                    <h3>Cart is empty</h3>
                </div>
            }
        </div>
    )
};

export default Cart;