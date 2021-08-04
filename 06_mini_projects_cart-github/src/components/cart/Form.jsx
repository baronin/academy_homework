import {useState, memo} from "react"
import styled from '@emotion/styled'
import {useAddItem} from "../../contexts/AppContext"
import {BsThreeDots} from "react-icons/bs"

export const Button = styled.button({
    color: 'turquoise',
  "&:hover": {
    color: 'grey',
  }
},
  ({disabled}) => ({
    background: disabled ? 'red' : null,
  }),
);

const Form = () => {
  const [val, setVal] = useState("");
  const {addItem, state} = useAddItem();
  const isDisabled = state.status === 'pending';

  function handleChange(e) {
    setVal(e.target.value)
    console.log(val)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!val) return;
    addItem(val)
    setVal("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-box">
        <div className="form-box__item">
          <input value={val} type="text" onChange={handleChange} />
          <Button disabled={isDisabled}>
            Add user
            {isDisabled && <span>spinner<BsThreeDots/></span>}
          </Button>
        </div>
      </div>
    </form>
  )
}

export default memo(Form);
