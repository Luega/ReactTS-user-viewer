import { useState, useEffect } from "react";
import { UserType } from "../types";

type Props = {
  user: UserType;
};

const User = (props: Props) => {
  return (
    <div className="user__card w-auto p-10 flex flex-col border border-black rounded-md shadow-lg">
      <div className="user__picture flex justify-center">
        <img src={props.user.picture} alt={props.user.name} />
      </div>
      <div className="user__name">{props.user.name}</div>
      <div className="user__info flex flex-col">
        <div>{`${props.user.address.streetName} ${props.user.address.streetNumber} ${props.user.address.postcode} ${props.user.address.city} ${props.user.address.country} ${props.user.address.state}`}</div>
        <div>{props.user.age}</div>
      </div>
    </div>
  );
};

export default User;
