import NewItem from './components/NewItem';
import ListItems from './components/ListItems';
import {useMarkAllUnpacked, useInitItems} from './Contexts/AppContexts';

const App = () => {
  const {packedItems, unpackedItems} = useInitItems();
  const markAllUnpacked = useMarkAllUnpacked();
  console.log("RERENDER")
  return (
      <div className='container py-3'>
        <NewItem />
        <div className='row'>
          <div className='col-md-5'>
            {unpackedItems && (
              <ListItems
                title='Unpacked Items'
                items={unpackedItems}
              />
            )}
          </div>
          <div className='offset-md-2 col-md-5'>
            {packedItems && (
              <ListItems
                title='Packed Items'
                items={packedItems}
              />
            )}

            <button
              className='btn btn-danger btn-lg btn-block'
              onClick={markAllUnpacked}
            >
              Mark All As Unpacked
            </button>
          </div>
        </div>
      </div>
  );
};

export default App;
