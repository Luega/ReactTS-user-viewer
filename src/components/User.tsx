import classes from "./User.module.css";
import { UserType } from "../types";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";

type Props = {
  user: UserType;
};

const User = (props: Props) => {
  return (
    <div
      className={`${classes.user__card} w-auto flex flex-col rounded-2xl truncate`}
    >
      <div className={`${classes.card__top} p-5 flex group rounded-2xl`}>
        <div className={`${classes.card__top__left} p-1 bg-white rounded-lg`}>
          <img
            className={`${classes.user__picture} rounded-lg`}
            src={props.user.picture}
            alt={props.user.name}
          />
        </div>
        <div className={`${classes.card__top__right} ml-4`}>
          <div className={`${classes.user__name} mb-2 text-3xl`}>
            {props.user.name}
          </div>
          <div className="user__location">
            {props.user.address.city} - {props.user.address.country}
          </div>
          <div>Age: {props.user.age}</div>
        </div>
      </div>
      <div
        className={`${classes.card__bottom} px-5 py-10 bg-white opacity-0 invisible flex flex-col `}
      >
        <div>
          <EmailRoundedIcon />
          <span className="ml-2">{props.user.email}</span>
        </div>
        <div>
          <LocalPhoneRoundedIcon />
          <span className="ml-2">{props.user.cell}</span>
        </div>
        <div>
          <MapRoundedIcon />
          <span className="ml-2">{`${props.user.address.streetName} ${props.user.address.streetNumber} ${props.user.address.postcode}`}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
