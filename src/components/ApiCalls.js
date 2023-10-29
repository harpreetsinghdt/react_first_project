import { useEffect, useState } from "react";

function ApiCalls(){

  const [users, setUsers] = useState('');
  // console.log('before use effect called');
  useEffect((e) => {
    // console.log('use effect called');
    getUsers();
  },[]);

  async function getUsers(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo1 = await res.json();
    // console.log(todo1);
    setUsers(todo1);
  }

  
  // console.log('after use effect called');  

  return(
    <div>
      <h2>api calls</h2>
      <h3>UserId: {users.userId}</h3>
      <h3>Id: {users.id}</h3>
      <h3>Title: {users.title}</h3>
      {/* {console.log('in jsx')} */}
    </div>
  )
}

export default ApiCalls;