import {memo} from "react";
import './Item.css';
import PropTypes from 'prop-types';
import {useRemoveItem, useToggleChecked} from "../Contexts/AppContexts";

const Item = ({ item }) => {
  const toggleTask = useToggleChecked();
  const removeItem = useRemoveItem();
  return (
        <li className='item-box'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              checked={item.packed}
              onChange={() => toggleTask(item.id)}
              id={item.id}
            />
            <label className='form-check-label' htmlFor={item.id}>{item.value}</label>
          </div>
          <button className='btn btn-secondary btn-sm' onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </li>
      )
};

Item.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    packed: PropTypes.bool,
  })
};

export default memo(Item);
