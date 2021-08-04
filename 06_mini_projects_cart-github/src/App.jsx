import CartList from "./components/cart/CartList"
import Form from "./components/cart/Form"
import {AppProvider} from "./contexts/AppContext"

function App() {
  return (
    <div className="container">
      <AppProvider>
        <Form />
        <CartList/>
      </AppProvider>
    </div>
  )
}

export default App;
