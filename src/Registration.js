import { useState } from 'react';
import './component_reg/form.css';

function Registration(){
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [gender, setGender] = useState("");
  let [languages, setLangauge] = useState({ 'english': false, 'french':false, 'spanish':false,'italian':false});
  let [langsName, setLangsName] = useState("");
  let [mode, setMode] = useState("");
  let [about, setAbout] = useState("");
  let [month, setMonth] = useState("");
  let [date, setDate] = useState("");
  let [exp, setExp] = useState(0);
  let [color, setColor] = useState("");
  let [url, setUrl] = useState("");
  let [formTF, setFormTF] = useState(false);
  console.log(gender);
  // setGender("male");
  function handleChange(e){
    setName(e.target.value);
  }

  function changeEmail(e){   
    setEmail(e.target.value);
  }
  
  function handleLangauge(isChecked, lang){
    // alert('here');
    console.log("Languages", isChecked, lang);
    languages[lang] = isChecked;
    console.log(languages);

    let newLangs = "";
    for(var lang in languages){
      if(languages[lang]){
        newLangs += lang +", "
      }
    }

    setLangsName(newLangs);
  }

  function handleForm(){
    setFormTF(true);
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  }
  return(
    <div className='main-container' >

      <div className='inner-container' >
        <form className="form-container">
          <h1>Registration Form</h1>

          <div className="element-container">
            <div>
              <label>Name: </label>
            </div>
            <div>
              <input type="text" placeholder="Enter full name" value={name} onChange={handleChange} />
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Email: </label>
            </div>
            <div>
              <input className="inputType" type="email" placeholder="Enter email address" onChange={changeEmail}/>
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Mobile: </label>
            </div>
            <div>
              <input className="inputType" type="tel" placeholder="Enter contact number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Gender: </label>
            </div>
            <div className="element-radio">
              <span>                
                <label><input type="radio" name="gender" placeholder="Choose gender" value="male" onClick={(e) => setGender(e.target.value)} /> Male </label>
              </span>
              <span>                
                <label><input type="radio" name="gender" placeholder="Choose gender" value="female" onClick={(e) => setGender(e.target.value)} /> Female </label>
              </span>
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Languages Speaking: </label>
            </div>
            <div className="element-checkbox">
              <span>              
                <label><input type="checkbox" name="language" placeholder="Choose language" value="english" onChange={(e) => handleLangauge(e.target.checked,"english")} /> English </label>
              </span>
              <span>  
                <label><input type="checkbox" name="langauge" placeholder="Choose language" value="french" onChange={(e) => handleLangauge(e.target.checked,"french")} /> French </label>
              </span>
              <span>              
                <label><input type="checkbox" name="langauge" placeholder="Choose language" value="spanish" onChange={(e) => handleLangauge(e.target.checked,"spanish")} /> Spanish </label>
              </span>
              <span>              
                <label><input type="checkbox" name="langauge" placeholder="Choose language" value="italian" onChange={(e) => handleLangauge(e.target.checked,"italian")} /> Italian </label>
              </span>
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Mode of Transportation: </label>
            </div>
            <div className="element-select">
              <select onChange={(e)=>setMode(e.target.value)}>
                <option value="">Choose mode of transportation</option>
                <option value="personal vehicle">Personal Vechicle</option>
                <option value="ride share">Ride Share</option>
                <option value="public transportation">Public Transportation</option>
              </select>
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Tell about yourself: </label>
            </div>
            <div>
              <textarea placeholder="Tell about yourself" onChange={(e) => setAbout(e.target.value)} />
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Bday Month & Year: </label>
            </div>
            <div>
              <input className="inputType" type="month" onChange={(e) => setMonth(e.target.value)}/>
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Birthday: </label>
            </div>
            <div>
              <input className="inputType" type="date" onChange={(e) => setDate(e.target.value)}/>
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Experience(Years): </label>
            </div>
            <div>
              <input className="inputType" type="number" min='0' value={exp} onChange={(e) => setExp(e.target.value)}/>
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Portfolio Link: </label>
            </div>
            <div>
              <input className="inputType" type="url" placeholder="Enter portfolio web url" onChange={(e) => setUrl(e.target.value)}/>
            </div>
          </div>

          <div className="element-container">
            <div>
              <label>Choose Color Code: </label>
            </div>
            <div>
              <input className="inputType" type="color" onChange={(e) => setColor(e.target.value)}/>
            </div>
          </div>

          <div className="element-container">
            <button className="btn" type="button" onClick={handleForm}>Submit</button>
          </div>   
          
        </form>
      </div>

      <div className='inner-container'>
        {formTF ? (
          <div className='output-container'>
            <span>Name: {name} </span><br/>
            <span>Email: {email} </span><br/>
            <span>Mobile: {mobile} </span><br/>
            <span>Gender: {gender} </span><br/>
            {/* <span>Language: {JSON.stringify(languages)} </span><br/> */}
            <span>Language: {langsName} </span><br/>
            <span>Mode: {mode} </span><br/>
            <span>About: {about} </span><br/>
            <span>Bday: {month} </span><br/>
            <span>Birthday: {date} </span><br/>
            <span>Experience(Yrs): {exp} </span><br/>
            <span>Color Code: {color} </span><br/>
            <span>Portfolio Url: {url} </span><br/>
            
          </div>
        ): null
        }
      </div>

    </div>
  )
}

export default Registration;