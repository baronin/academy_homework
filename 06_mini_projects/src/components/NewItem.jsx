import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { generate as id } from 'shortid';

const NewItem = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({
      value,
      id: id(),
      packed: false,
    });
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

NewItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default NewItem;
