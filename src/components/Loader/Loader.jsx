import "./Loader.sass"
import loading from "../../assets/loading.svg"

const Loader = () => {
  return (
    <div className="loader-container">
        <img src={loading} className="loader" alt="Loading" />
    </div>
  )
}

export default Loader