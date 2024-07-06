import { likeIcon, saveIcon } from "../../assets/icons";
import { postPhoto } from "../../assets/images";

export default function Postcard(props) {
  return (
    <div className="flex flex-col border border-[#1F1F22] bg-[#09090A] rounded-3xl b-dark-2 p-8">
      <div className="flex gap-3 mb-4">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={props.profileImage}
          alt="profile-image"
        />
        <div className="flex flex-col">
          <p>{props.userName}</p>
          <p className="text-[12px] font-semibold mt-1 text-[#7878A3]">
            {props.time} - {props.location}
          </p>
        </div>
      </div>

      <div>
        {props.mediaType ? (
          props.mediaType == "image" ? (
            <img
              className="w-full h-[450px] object-cover rounded-[24px]"
              src={props.postPhoto}
              alt="post-image"
            />
          ) : props.mediaType == "video" ? (
            <video className="w-full h-[450px] object-cover rounded-[24px]" controls>
              <source src={props.postPhoto} type={props.type} />
            </video>
          ) : null
        ) : null}
      </div>
      <div className="flex flex-col">
        <p>{props.caption}</p>
        <p>#{props.tags}</p>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img src={likeIcon} alt="Like-icon" />
            <p>{props.likes}</p>
          </div>
          <img src={saveIcon} alt="Save-icon" />
        </div>
      </div>
    </div>
  );
}
