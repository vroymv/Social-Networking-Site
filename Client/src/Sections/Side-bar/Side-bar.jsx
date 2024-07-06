import { sidebarLinks } from "../../Constants";
import Profilecard from "../../Shared/Profilecard";
import { backIcon, logoutIcon } from "../../assets/icons";
import { logoIcon } from "../../assets/images";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

export default function SideBar(props) {
  let { userInfor } = useRouteLoaderData("root");
  return (
    <div className="hidden md:flex px-6 py-10 flex-col h-[100vh] min-w-[270px] bg-[#09090A]">
      <div className="w-[170px] h-[36px]">
        <img className="w-full" src={logoIcon} alt="Snapgram Logo" />
      </div>
      <div className="mt-4">
        <Profilecard
          userId = {userInfor._id}
          h="14"
          w="14"
          profileImg={userInfor.profileImage?userInfor.profileImage.imgUrl:null}
          name={userInfor.name}
          nickName={userInfor.username}
        />
      </div>
      <div className="mt-4 h-96 justify-evenly flex flex-col">
        {sidebarLinks.map((link) => {
          return (
            <button
              key={link.label}
              className="rounded-lg text-lg hover:bg-primary-500 group base-medium py-4  px-2 transition"
            >
              <NavLink className="flex  gap-3" to={link.route}>
                <img
                  className="group-hover:invert group-hover:brightness-0 group-hover:transition"
                  src={link.imgURL}
                />{" "}
                {link.label}
              </NavLink>
            </button>
          );
        })}
      </div>

      <Form action="/logout" className="mt-[6rem] pl-6 text-lg">
        <button type="submit" to={"/login"}>
          <div className="flex gap-3">
            <img src={logoutIcon} /> Logout
          </div>
        </button>
      </Form>
    </div>
  );
}
