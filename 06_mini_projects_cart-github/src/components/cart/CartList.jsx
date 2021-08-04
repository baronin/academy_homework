import {memo} from "react"
import {useAppContext} from "../../contexts/AppContext"
import Cart from './Cart'

const CartList =  () => {
    const state = useAppContext();
    console.log("rerender cartList");
    return (
        <div className="cart-box">
            {state.items.map(item => <Cart item={item} key={item.id} />)}
        </div>
    )
}

CartList.defaultProps = {
    items: []
}

export default memo(CartList);
