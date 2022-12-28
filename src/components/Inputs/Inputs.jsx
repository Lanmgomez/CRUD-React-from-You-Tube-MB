import "./Input.sass"

const Inputs = ({ type, text, name, placeholder, handleChange, value }) => {
  return (
    <div className="form-control">
        <label htmlFor={name}>{text}:</label>
        <input 
            type={type}
            placeholder={placeholder}
            id={name}
            name={name}
            onChange={handleChange}
            value={value}       
        />
    </div>
  )
}

export default Inputs