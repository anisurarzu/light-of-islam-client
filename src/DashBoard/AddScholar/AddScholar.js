import React, { useState } from "react";

const AddScholar = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/scholar", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setMessage("Admin make successfully");
        }
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div className="make-admin-container mt-8">
      <i className="fas fa-user text-5xl xl:text-9xl lg:text-9xl admin-icon"></i>
      <h1 className="text-center text-2xl pt-2">Add Scholar</h1>
      <form onSubmit={handleAdminSubmit}>
        <input
          className="p-2 rounded-full mt-4 time-input"
          type="email"
          onBlur={handleOnBlur}
          placeholder="enter a user email"
          required
        />
        <br />
        <button
          className="btn-design my-4 px-2 rounded-full text-white"
          type="submit"
        >
          Make Scholar
        </button>
      </form>
      <span>{message}</span>
    </div>
  );
};

export default AddScholar;
