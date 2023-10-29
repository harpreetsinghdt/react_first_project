import { useState } from 'react';
import './component_reg/form.css';

function Registration(){

  let [name, setName] = useState("");
  let [formTF, setFormTF] = useState(false);

  console.log(name);
  return(
    <div className='main-container' >
      <form className="form-container">
        <h1>Registration From</h1>
        <div className="element-container">
          <label>Name: </label>
          <input type="text" placeholder="Enter full name" value={name} onChange={setName} />
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
          <button type="button" onClick={setFormTF}>Sumbit</button>
        </div>
      </form>
      <div className='side-container' >
        {formTF ? (
            <div>
              {name}
            </div>
        )
          : null
}
      </div>
    </div>
    
  )
}

export default Registration;