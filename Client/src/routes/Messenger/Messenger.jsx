import Sidebar from "./Sidebar";

import Header from "./Header";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Messenger(props) {
  const userData = useLoaderData();
  return (
    <div className="overflow-hidden flex flex-col">
      <Header userId={userData.userInfor._id} user={userData.userInfor.profileImage.imgUrl} />
      <div className="flex">
        <Sidebar />
        <Outlet context={userData}/>
      </div>
    </div>
  );
}
