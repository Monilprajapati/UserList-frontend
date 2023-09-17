import React from "react";
import UserCard from "./USerCard";
import { useState, useEffect } from "react";
import { getUsers } from "../service/api";

const All = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };
  // const deleteUserData = async (id) => {
  //   await deleteUser(id);
  //   getAllUsers();
  // }
  // deleteUserData={deleteUserData}
  console.log(users);

  return (
    <div className="flex flex-wrap my-10 ml-10 gap-20">
      {users.map((user) => (
        <UserCard key={user._id} user={user}  />
      ))}
    </div>
  );
};

export default All;
