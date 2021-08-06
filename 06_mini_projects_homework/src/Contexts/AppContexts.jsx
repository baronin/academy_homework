import {createContext, useState, useContext} from "react";
import {defaultState} from "../data";

export const AppStateContext = createContext({})
export const AppDispatchContext = createContext({})

export function AppContextProvider({children}) {
  const [items, setItems] = useState(defaultState);
  return <AppStateContext.Provider value={items}>
    <AppDispatchContext.Provider value={setItems}>{children}</AppDispatchContext.Provider>
  </AppStateContext.Provider>
}

// TODO custom hook
export const useAppStateContext = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw Error("useAppStateContext must be invoked withing AppContext");
  }
  return context;
}

export const useAppDispatchContext = () => {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw Error("useAppDispatchContext must be invoked withing AppContext");
  }
  return context;
}

export const useAppStateAndContext = () => [useAppStateContext(), useAppDispatchContext()];

export const useAddItem = (val) => {
  const setItems = useAppDispatchContext();
  return (val) => setItems(items => [val, ...items]);
}

export const useRemoveItem = () => {
  const setItems = useAppDispatchContext();
  return (id) => {
    if (!window.confirm('Are you sure?!')) return false;
    setItems(items => items.filter((v) => v.id !== id));
  }
}


export const useToggleChecked = () => {
  const setItems = useAppDispatchContext();
  return (id) => setItems(v => v.map((item) =>
        item.id !== id
          ? item
          : {...item, packed: !item.packed}
      ))
  };

export const useMarkAllUnpacked = () => {
  const setItems = useAppDispatchContext();
  return  () => setItems(v => v.map((item) => ({...item, packed: false})));
};

export function useInitItems() {
  const items = useAppStateContext();
  const packedItems = items.filter((item) => item.packed);
  const unpackedItems = items.filter((item) => !item.packed);
  return {packedItems, unpackedItems}
}


