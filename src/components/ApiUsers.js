import { useEffect, useState } from "react";

function ApiUsers(){

  const [users, setUsers] = useState([]);

  async function fetchUserList(){
    const userList = await fetch('https://jsonplaceholder.typicode.com/users');
    // if(!userList){
      const uList = await userList.json();
      console.log("userList", uList);
      setUsers(uList);
    // }
  }

  useEffect( (e) => {
    fetchUserList();
  },[])

  return(
    <div>
      <h1>Users List:</h1>
      {users.map( (e) => <h2>{e.name}</h2>)}
      <span></span>
    </div>
  )
}

export default ApiUsers;