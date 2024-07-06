import { redirect } from "react-router-dom";
import { getUserInfor, requestAuth, getUsers } from "../../lib/Node/api";

export async function messengerLoader({request}) {
  const isAuthenticated = await requestAuth();
  const Users = await getUsers();
  let userInfor;

  try {
    if (!isAuthenticated.status) {
      let params = new URLSearchParams();
      params.set('from', new URL (request.url).pathname);
      return redirect("/login?" + params.toString());
    }

    userInfor = await getUserInfor(isAuthenticated.userId);
    return (
      {
        userInfor: userInfor,
        users: Users,
      }
    );
  } catch (error) {
    console.log(error);
  }
  

}
