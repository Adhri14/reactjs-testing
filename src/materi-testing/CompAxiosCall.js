import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CompAxiosCall() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>List member kabayan coding : </p>
      <button data-testid="get-user" onClick={getUsers}>
        Get user
      </button>

      {users.map((item, i) => (
        <p data-testid="users" key={i}>
          {item.name}
        </p>
      ))}
    </div>
  );
}
