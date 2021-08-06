import React, {useState} from 'react';
import Item from './Item';
import Filter from './Filter';
import PropTypes from 'prop-types';

const ListItems = ({title, items}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateFilter = (e) => setSearchTerm(e);

  const getBody = () => items
    .filter((item) => item.value.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((v) => (<Item key={v.id} item={v}/>));

  return (
    <section>
      <h3 className='mb-3'>{title}</h3>
      <Filter updateFilter={updateFilter} onChange={searchTerm}/>
      <ul className='mb-3 p-0'>
        {getBody()}
      </ul>
    </section>
  );
};

ListItems.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default ListItems;
