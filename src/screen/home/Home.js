import React from 'react';
import Header from '../../component/header/Header';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import authenticate from '../../hoc/authentication'
 function Home() {
//  var local=localStorage.getItem("users")
//  var users = JSON.parse(localStorage.getItem("users")).length;
let mainusers = JSON.parse(localStorage.getItem("users"))
let totaluser = mainusers.length
var falseUsers=mainusers .length >0 && mainusers .filter(user=>user.status === false)

var trueUsers=mainusers .length >0 && mainusers .filter(user=>user.status === true)
 
//  var arrayLength = arrayFromStroage.length;
//  var email=local.length.useremail
// for(let i of local){
//   console.log(`${i}:${localStorage.getItem(i)}`)
// }
// var trueUsers=users.length >0 && users.filter(user=>user.status === true)
// var falseUsers=users.length >0 && users.filter(user=>user.status === false)
// console.log(trueUsers.length,"true")
 // console.log(arrayFromStroage,"local")
  return (
    <div className="home">
       <Header pageHeader="Dashboard"/>
       {/* {users.filter(name=>name.status>0 && name.status===true)} */}
       
       <Card body>
        <CardTitle tag="h5">Total-Users-Length:</CardTitle>
        <CardText>{totaluser}</CardText>
        
      </Card>
      <Card body>
        <CardTitle tag="h5">true-users</CardTitle>
        <CardText>{trueUsers.length}</CardText>
       
      </Card>
      <Card body>
        <CardTitle tag="h5">false-users</CardTitle>
        <CardText>{falseUsers.length}</CardText>
       
      </Card>
     
      
       
    </div>
  );
}
export default Home;