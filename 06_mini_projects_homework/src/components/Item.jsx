import './Item.css';
import PropTypes from 'prop-types';
import AppContexts from "../Contexts/AppContexts";
const Item = ({ item }) => {
  return (
    <AppContexts.Consumer>
      {({toggleTask, removeItem}) => (
        <li className='item-box'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              checked={item.packed}
              onChange={() => toggleTask(item)}
              id={item.id}
            />
            <label className='form-check-label' htmlFor={item.id}>
              {' '}
              {item.value}
            </label>
          </div>
          <button
            className='btn btn-secondary btn-sm'
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </li>
      )}
    </AppContexts.Consumer>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    packed: PropTypes.bool,
  })
};

export default Item;
