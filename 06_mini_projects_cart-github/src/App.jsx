import {useState, useCallback, useMemo} from "react"
import CartList from "./components/cart/CartList"
import Form from "./components/cart/Form"
import {fetchUser} from "./utils"
import {BsThreeDots} from "react-icons/bs"
import AppContext from "./contexts/AppContext"

function App() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const addItem = async userName => {
    console.log(userName)
    if (data.find(v => v.login === userName)) {
      setError({message: `user ${userName} already exists`})
      return
    }
    setStatus("pending")
    setError(null)
    // await sleep()
    fetchUser(userName)
      .then(item => {
        setData(x => [...x, item])
        setStatus("resolved")
      }, error => {
        setError(error)
        setStatus("rejected")
      })
  }

  const deleteItem = useCallback( itemId => {
    if (!window.confirm("Are you sure?")) {
      return false
    }
    setData(data.filter(item => item.id !== itemId))
  }, [data]);

  const value = useMemo(() => ({deleteItem}), [deleteItem])

  return (
    <div className="container">
      <Form
        addItem={addItem} isDisabled={status === "pending"} />
      {status === "pending" && <h1>loading...<BsThreeDots /></h1>}
      {error === "rejected" && <h1>Error...{error.message}</h1>}
      <AppContext.Provider value={value}>
        <CartList items={data} />
      </AppContext.Provider>
    </div>
  )
}

export default App;
