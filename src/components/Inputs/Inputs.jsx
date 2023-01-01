import "./Input.sass"

const Inputs = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <div className="form-control">
        <label htmlFor={name}>{text}:</label>
        <input 
            type={type}
            placeholder={placeholder}
            id={name}
            name={name}
            onChange={handleOnChange}
            value={value || ""}
            required    
        />
    </div>
  )
}

export default Inputs