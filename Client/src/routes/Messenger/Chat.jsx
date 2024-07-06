import { Link } from "react-router-dom";
import { activeIcon } from "../../assets/icons";

export default function Chat(props) {
  return (
    <Link to={"/messenger/" + props.to} className="flex gap-2 bg-[#877EFF] h-fit w-fit px-4 pr-6 py-2 rounded-xl my-3">
      <div>
        <img className="w-[3.5rem] h-[3.5rem] rounded-full" src={props.profileImg} alt="userPhoto" />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
        <p>{props.userName}</p>
        <img className="w-[10px] h-[10px] mr-2 mt-1" src={activeIcon} alt="active Icon" />
        </div>
        <p className=" text-sm text-[#22222c]">You: Hey there... 2m</p>
      </div>
    </Link>
  );
}
