import { useState } from 'react';
import NewItem from './components/NewItem';
import ListItems from './components/ListItems';
import { defaultState } from './data';

const App = () => {
  const [items, setItems] = useState(defaultState);
  const packedItems = items.filter((item) => item.packed);
  const unpackedItems = items.filter((item) => !item.packed);

  const addItem = (val) => {
    if (items.find((v) => v.value === val.value)) return;
    const newItem = [val, ...items];
    setItems(newItem);
  };

  const removeItem = (id) => {
    if (!window.confirm('Are you sure?!')) return false;
    setItems(items.filter((v) => v.id !== id));
  };

  const toggleTask = (toggledId) => {
    setItems(
      items.map((item) =>
        item.id !== toggledId.id
          ? item
          : { ...toggledId, packed: !toggledId.packed }
      )
    );
  };

  const deleteItems = (e) => {
    e.preventDefault();
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  return (
    <div className='container py-3'>
      <NewItem addItem={addItem} />
      <div className='row'>
        <div className='col-md-5'>
          {unpackedItems && (
            <ListItems
              toggleTask={toggleTask}
              removeItem={removeItem}
              title='Unpacked Items'
              items={unpackedItems}
            />
          )}
        </div>
        <div className='offset-md-2 col-md-5'>
          {packedItems && (
            <ListItems
              toggleTask={toggleTask}
              removeItem={removeItem}
              title='Packed Items'
              items={packedItems}
            />
          )}

          <button
            className='btn btn-danger btn-lg btn-block'
            onClick={deleteItems}
          >
            Mark All As Unpacked
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;