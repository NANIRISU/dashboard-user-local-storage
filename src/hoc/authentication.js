// import { useState } from "react";
// import DashboardLayout from "../component/dashboardLayout/DashboardLayout";
// import React,{useState} from 'react';

// function authenticate(component) {

//     const [defualtemail,setdeafultemail]=useState('admin');
//     const [defualtpassword,SetDeafultPassword]=useState('admin');
    
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//   const accessToken = localStorage.getItem("Access-Token");

//   const loginClickHandlerAdmin= (e)=>{
//     e.preventDefault()  // reloading 
//     console.log(defualtemail,"defualtemail");
//     console.log(defualtpassword,"defualtpassword")
//     if(email===defualtemail && password===defualtpassword)
//     {
//         return component;
//             // ()=>(
//             //     <DashboardLayout>
//             //        <component/>
//             //     </DashboardLayout>
//             // )
//     }
//     else{
//         return ()=>{
//             window.location.replace("/login");
//             return (
//                 <div>
// //           <h1> Unauthorized</h1>
// //           <h4>please login</h4>
// //         </div>
//             )
//         }
        
//     }
// }

//   // api - validate the token
// //   const isLoggedIn = accessToken ? true : false;
// //   if (isLoggedIn) {
// //     return component;
// //     // ()=>(
// //     //     <DashboardLayout>
// //     //        <component/>
// //     //     </DashboardLayout>
// //     // )
// //   } else {
// //     return () => {
// //       window.location.replace("/login");
// //       return (
// //         <div>
// //           <h1> Unauthorized</h1>
// //           <h4>please login</h4>
// //         </div>
// //       );
// //     };
// //   }

// }
// export default authenticate;
