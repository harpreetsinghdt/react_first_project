import './component_reg/form.css';

function Registration(){

  let name ="Singh";
  function handleChange(e){
    console.log(e.target.value);
    name=e.target.value;
  }

  return(
    <div className='main-container' >
      <form className="form-container">
        <h1>Registration From</h1>
        <div className="element-container">
          <label>Name: </label>
          <input type="text" placeholder="Enter full name" value={name} onChange={handleChange} />
        </div>
        <div className="element-container">
          <label>Email: </label>
          <input type="text" placeholder="Enter email address" />
        </div>
        <div className="element-container">
          <label>Mobile: </label>
          <input type="text" placeholder="Enter contact number" />
        </div>
        <div className="element-container">
          <button type="button">Sumbit</button>
        </div>
      </form>
    </div>
  )
}

export default Registration;