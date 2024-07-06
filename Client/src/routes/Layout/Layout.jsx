import { Outlet, useRouteLoaderData } from "react-router-dom";
import SideBar from "../../Sections/Side-bar/Side-bar";

export function Layout(props) {
  let userInfor = useRouteLoaderData("root");
  return (
    <div className="flex overflow-hidden h-[100vh]">
      <SideBar />
      <div className="overflow-y-auto flex-1">
        <Outlet context={userInfor} />
      </div>
    </div>
  );
}
