import {memo} from "react"

import PropTypes from 'prop-types'
import Cart from './Cart'

const CartList =  ({items}) => {
    console.log("rerender cartList");
    return (
        <div className="cart-box">
            {items.map(item => <Cart item={item} key={item.id} />)}
        </div>
    )
}

CartList.propTypes = {
    items: PropTypes.array.isRequired,
}

CartList.defaultProps = {
    items: []
}

export default memo(CartList);
