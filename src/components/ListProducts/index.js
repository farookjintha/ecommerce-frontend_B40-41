import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cart.actions";

import './listProducts.css';

const ListProducts = () => {
    const dispatch = useDispatch();

    const products = useSelector((store) => store.products);
    const categories = useSelector((store) => store.categories);

    return (
        <div>
            <h2>All Products</h2>
            <div className="products-container">
                {
                    products.length ? 
                    <>
                        {products.map((product, index) => (
                            <div key={index} className="product">
                                <h2>{product.name}</h2>
                                <h3>{product.price}</h3>
                                <h4>{categories.find((category) => category.id === product.category)?.name}</h4>
                                <button type="button" class="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                            </div>
                        ))}
                    </> :
                     <div>
                         <h3>No Products Available</h3>
                     </div>
                }
            </div>
        </div>
    )
}

export default ListProducts;