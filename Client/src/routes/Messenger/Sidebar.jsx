import { useLoaderData } from "react-router-dom";
import Chat from "./Chat";
import { profilePlaceholder } from "../../assets/icons";

export default function Sidebar(props) {
  const Users = useLoaderData().users.Users;
  return (
    <div className="flex flex-col w-80 bg-[#09090A] h-[90vh] border-r-4 border-[#2b2b35]">
      <div className="flex flex-col order-0">
        <h1 className="text-center font-bold text-xl mt-2">Chat Threads</h1>
        <hr className="mx-auto w-[80%]" />
      </div>
      <div className="overflow-auto side-bar-scrollbar flex flex-col items-center ">
        {Users.map((thread, index) => {
          return (
            <Chat
              key={index}
              to={thread._id}
              profileImg={thread.profileImage? thread.profileImage.imgUrl : profilePlaceholder}
              userName={thread.username}
            />
          );
        })}
      </div>
    </div>
  );
}
