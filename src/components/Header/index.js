import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/icons/cart.png';
import './header.css';

const Header = () => {
    const cart = useSelector((store) => store.cart);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>The Chennai Shop</NavLink>
                
                <NavLink className="navbar-brand" to='/cart'>
                    <div className='cart-icon'>
                        <img src={cartIcon} alt='Cart' />
                        <span className='cart-count'>{cart.length}</span>
                    </div>
                </NavLink>
            </div>
            </nav>
    )
}

export default Header;