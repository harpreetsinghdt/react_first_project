import Test1 from "./components_props/Test1";

function App2(){
  
  const name="Harpreet Singh";

  return(
    <div>
      <h1>This is App Props Component developed by : {name}</h1>
      <Test1 dev={name} ></Test1>
    </div>
  )
}

export default App2;