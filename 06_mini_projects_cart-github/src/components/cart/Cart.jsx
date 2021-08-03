import {memo} from "react"
import PropTypes from 'prop-types'
import AppContext from "../../contexts/AppContext"

const Cart = ({item}) => {
    console.log("rerender cart", item.id);
    return <AppContext.Consumer>
        {({deleteItem}) =>
            <div className="cart">
                <h3>{item.name}</h3>
                <p>{item.login}</p>
                <img src={item.avatar_url} alt={item.name}/>
                <button className="delete-button" onClick={() => deleteItem(item.id)}>Delete user</button>
            </div>
        }
    </AppContext.Consumer>
}

Cart.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
    }),
}


export default memo(Cart);
