import React, { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import authenticate from "../../hoc/authentication";

function Settings(props) {


  const [users, setUsers] = useState([]);
  useEffect(() => {
    var userLogin = localStorage.getItem("users");
    // console.log(userLogin)
    setUsers(JSON.parse(userLogin));
  }, []);

  const logoutHandler=()=>{
    props.history.push('/login')
}
  const TableData = () => {
    return users.map((user, index) => {
      console.log(users, "settings");
      return (
        
        <tr>
          <td>{user.useremail}</td>

          {/* <td>{user.password}</td> */}
        </tr>
      );
    });
  };
  return (
    <div className="settings">
      <button onClick={logoutHandler} style={{background:"black",color:"white",width:"60px",marginTop:"20px",marginLeft:"20px"}}>Logout</button>
      <h2> User table</h2>
      <table>
        <th>
          Email
          <tbody>{TableData()}</tbody>
        </th>
      </table>
    </div>
  );
}
export default authenticate(Settings);
