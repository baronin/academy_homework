import { useState, memo } from 'react';
import { generate as id } from 'shortid';
import {useAddItem} from "../Contexts/AppContexts";

const NewItem = () => {
  const [value, setValue] = useState('');
  const addItem = useAddItem();
  const handleChange = ({target}) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({
      value,
      id: id(),
      packed: false,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-10'>
          <input
            className='form-control mb-3'
            onChange={handleChange}
            type='text'
            value={value}
          />
        </div>
        <div className='col-md-2'>
          <input className='btn btn-success' type='submit' value='Add item' />
        </div>
      </div>
    </form>
  );
};

export default memo(NewItem);
