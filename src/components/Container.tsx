import React, { useState, useEffect } from "react";
import { UserType } from "../types";
import User from "./User";
import NameChangerForm from "./NameChangerForm";

const Container = () => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const getUser = async () => {
      const data = await fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => data.results)
        .then((results) => results[0])
        .catch((error) => {
          console.log(console.log(error));
        });

      const newUser = {
        picture: data.picture.large,
        name: `${data.name.first} ${data.name.last}`,
        age: data.dob.age,
        address: {
          streetName: data.location.street.name,
          streetNumber: data.location.street.number,
          postcode: data.location.postcode,
          city: data.location.city,
          country: data.location.country,
          state: data.location.state,
        },
        email: data.email,
        cell: data.cell,
      };
      setUser(newUser);
    };

    getUser();

    return () => {};
  }, []);

  const NameChangeHandler = (name: string) => {
    setUser({ ...user!, name: name });
  };

  return (
    <div className="Container w-full pt-20 flex flex-col items-center">
      <NameChangerForm setNewName={NameChangeHandler} />
      {user ? <User user={user} /> : <div>Loading...</div>}
    </div>
  );
};

export default Container;
