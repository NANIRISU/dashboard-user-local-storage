import React from "react";


const User = (props) => {
    const logoutHandler=()=>{
        props.history.push('/login')
    }
  return (
    <div>
      <div style={{display:"flex",flexDirection:"column",width:"50%"}}>
        <label>Name:</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Number</label>
        <input type="number" />
        <label>image</label>
        <input type="file" />
        <button onClick={logoutHandler} style={{background:"black",color:"white",width:"60px",marginTop:"20px",marginLeft:"20px"}}>Logout</button>
      </div>
    </div>
  );
};

export default User;
