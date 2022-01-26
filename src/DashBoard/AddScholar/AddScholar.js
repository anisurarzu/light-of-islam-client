import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddScholar = () => {
  const [message, setMessage] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [scholarId, setScholarId] = useState("");
  console.log(scholarId);
  useEffect(() => {
    fetch("https://limitless-lowlands-32082.herokuapp.com/scholarId")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setScholarId(data[0].islaimcFoundationId);
      });
  }, []);
  const onSubmit = (data) => {
    console.log(data);

    if (data.iFb_id === scholarId) {
      fetch("https://limitless-lowlands-32082.herokuapp.com/users/scholar", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setMessage("Id matched! Scholar added successfully");
            reset();
            window.location.replace("/dashboard/scholarlist");
          }
        });
    } else {
      setMessage("Islamic Foundation Id Does not Matched!");
    }
  };

  return (
    <div className="make-admin-container mt-8">
      <i className="fas fa-user text-5xl xl:text-9xl lg:text-9xl admin-icon"></i>
      <h1 className="text-center text-2xl pt-2">Add Scholar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 rounded-full mt-4 time-input"
          type="email"
          {...register("email")}
          placeholder="enter a scholar email"
          required
        />
        <br />
        <input
          className="p-2 rounded-full mt-4 time-input"
          type="text"
          {...register("iFb_id")}
          placeholder="enter scholar (IFB_id)"
          required
        />
        <br />
        <input
          className="btn-design my-4 px-2 rounded-full text-white"
          type="submit"
          value="Make Scholar"
        />
      </form>
      <span>{message}</span>
    </div>
  );
};

export default AddScholar;
