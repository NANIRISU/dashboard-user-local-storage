import React, { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import { Table } from "reactstrap";
// import { Button } from "antd";
import {Button} from 'reactstrap';
import Input from "../../component/input/Input";
// import { Table } from "antd";

function Settings(props) {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState(users);

  useEffect(() => {
    var userLogin = localStorage.getItem("users");

    setFilterUsers(JSON.parse(userLogin));
    setUsers(JSON.parse(userLogin));
  }, []);

  const logoutHandler = () => {
    props.history.push("/login");
  };
  const approveUserName = (index, status) => {
    var obj = [...users];
    obj[index].status = !status;
    setUsers(obj);
    setFilterUsers(obj)
    localStorage.setItem("users", JSON.stringify(obj));
    console.log(users[index]);
  };
const searchData = (searchWord) => {
    console.log("searchWord", searchWord);
    if (searchWord !== "") {
      const newData = users.filter((item) => {
        const email = item.useremail
          ? item.useremail.toUpperCase()
          : "".toUpperCase();
        const searchWordData = searchWord.toUpperCase();
        if (email.indexOf(searchWordData) > -1) {
          return email.indexOf(searchWordData) > -1;
        }
      });
      setFilterUsers(newData);
    } else {
      setFilterUsers(users);
      console.log(users, "hello");
    }
  };

  const TableData = () => {
    return filterUsers.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.useremail}</td>
          <td>{user.status.toString()}</td>

          <td>

            {user.status ? (
              <Button
                onClick={() => {
                  approveUserName(index, user.status);
                }}
              >
                Disable user
              </Button>
            ) : (
              <Button
                onClick={() => {
                  approveUserName(index, user.status);
                }}
              >
                Approve user
              </Button>
            )}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="settings">
      <button
        onClick={logoutHandler}
        style={{
          background: "black",
          color: "white",
          width: "60px",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        Logout
      </button>
      <h2> User table</h2>
      <input
        type="text"
        onChange={(e) => searchData(e.target.value.toString())}
      ></input>
      <Table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        {TableData()}
      </Table>
    </div>
  );
}
export default Settings;
