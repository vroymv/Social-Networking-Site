import { NavLink } from "react-router-dom";
import { profilePlaceholder } from "../assets/icons";


export default function Profilecard(props) {
  return (
    <NavLink to={"/profile/"+props.userId} className="flex gap-3">
      <div>
        <img className={`rounded-full h-${props.h} w-${props.w}`} src={props.profileImg || profilePlaceholder} alt="profile-image" />
      </div>
      <div className="flex flex-col">
        <h2 className={`${props.hsize} font-bold`}>
            {props.name}
        </h2>
        <p className="text-[#7878A3]" >@{props.nickName}</p>
      </div>
    </NavLink>
  );
}
