import {createContext, useReducer, useContext} from "react"
import {fetchUser} from "../utils"

const AppStateContext = createContext({})
const AppDispatchContext = createContext({})

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
      console.log("itemDeleted", action.id)
      return {...state, items: [...state.items.filter(item => item.id !== action.id)]}
    default:
      throw Error("this case impossible")
  }
}

export const useAppContext = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw Error("useAppContext must be called within AppProvider")
  }
  return context
}

export const useAppDispatchContext = () => {
  const context = useContext(AppDispatchContext)
  if (!context) {
    throw Error("useAppDispatchContext must be called within AppProvider")
  }
  return context
}

export const useAppAndDispatchContext = () => [useAppContext(), useAppDispatchContext()]

export const useAddItem = () => {
  const state = useAppContext();
  const dispatch = useAppDispatchContext();
  const {items} = state;

  function addItem(userName) {
    if (items.find(v => v.login === userName)) return
    dispatch({type: "pending"})
    fetchUser(userName)
      .then(item => dispatch({type: "resolved", item}), error => dispatch({type: "rejected", error}))
  }

  return {addItem, state}
}

export const useDeleteItem = () => {
  const dispatch = useAppDispatchContext()
  return function(id) {
    if (!window.confirm("Are you sure?")) {
      return false
    }
    dispatch({type: "itemDeleted", id})
  }
}
export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return <AppStateContext.Provider value={state}>
    <AppDispatchContext.Provider value={dispatch}>
      {children}
    </AppDispatchContext.Provider>
  </AppStateContext.Provider>
}

