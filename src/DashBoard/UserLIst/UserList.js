import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const UserList = () => {
  const { scholar, scholars } = useAuth();
  const [userList, setUserList] = useState();

  console.log(scholars);
  return <div></div>;
};

export default UserList;
