/**
 * @author Fazal Iqubal
 */

import React, { FC, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

/**
 * @description AddUser component.
 * Component used for Adding the data in Table.
 */

const AddUser:FC = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    Name: "",
    Position: "",
    Email: "",
  });

  const { Name, Email, Position } = user;
  const onInputChange = (e:any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e:any) => {
    console.log(user);
    e.preventDefault();
    await axios.post(
      "https://6086b481a3b9c200173b69ab.mockapi.io/api/getEmployees",
      user
    );
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Employee</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="Name"
              value={Name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your position"
              name="Position"
              value={Position}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="Email"
              value={Email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
