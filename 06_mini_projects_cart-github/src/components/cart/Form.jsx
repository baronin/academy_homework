import {useState, memo} from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled'


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

const Form = ({addItem, isDisabled}) => {
  const [val, setVal] = useState("")
  // console.log(val)
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
          <Button disabled={isDisabled} style={isDisabled ? {background: 'red'} : null}>
            Add user
          </Button>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default memo(Form);
