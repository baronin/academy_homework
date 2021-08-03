import React, { useState } from 'react';
import Item from './Item';
import Filter from './Filter';
import PropTypes from 'prop-types';

const ListItems = ({ title, items, removeItem, toggleTask }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateFilter = (e) => setSearchTerm(e);

  return (
    <section>
      <h3 className='mb-3'>{title}</h3>
      <Filter updateFilter={updateFilter} onChange={searchTerm} />
      <ul className='mb-3 p-0'>
        {items &&
          items
            .filter((item) =>
              item.value.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((v) => (
              <Item
                toggleTask={toggleTask}
                removeItem={removeItem}
                key={v.id}
                item={v}
              />
            ))}
      </ul>
    </section>
  );
};

ListItems.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

export default ListItems;
