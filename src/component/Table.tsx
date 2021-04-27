/**
 * @author Fazal Iqubal
 */

import React, { FC } from "react";
import "antd/dist/antd.css";

/**
 * @description Table component.
 * Component used for design the table and show the data in table.
 */

 type tableProps = {
  users?: any,
};

const Table: FC<tableProps> = ({ users }: tableProps) => {
  return (
    <>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: {                username: string;
                id: string;
                Name: string;
                Email: string;
            Position: string;
          },
            index: number) => {
            return (
              <tr key={"row" + user.id}>
                <td key={"id" + user.id}>{user.id}</td>
                <td key={"name" + user.id}>{user.Name}</td>
                <td key={"email" + user.id}>{user.Email}</td>
                <td key={"position" + user.id}>{user.Position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Pagination defaultCurrent={1} total={20} /> */}
    </>
  );
};

export default Table;
