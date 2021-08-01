import './Item.css';
import PropTypes from 'prop-types';

const Item = ({ item, removeItem, toggleTask }) => {
  return (
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
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    packed: PropTypes.bool,
  }),
  removeItem: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

export default Item;
