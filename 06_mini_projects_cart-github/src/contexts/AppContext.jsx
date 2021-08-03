import {createContext, useReducer, useContext} from "react"

const AppContext = createContext({})

const initState = {
  items: [],
  status: "idle",
  error: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "pending":
      return {...state, status: "pending", error: null}
    case "resolved":
      return {...state, items: [...state.items, action.item], status: "resolved", error: null}
    case "rejected":
      return {...state, status: "rejected", error: action.error}
    case "itemDeleted":
      return {...state, items: [...state.items.filter(item => item.id !== action.id)]}
    default:
      throw Error("this case impossible")
  }
}

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = [state, dispatch];

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error('useAppContext mst be called within AppProvider')
  }
  return context;
}
export default AppContext
