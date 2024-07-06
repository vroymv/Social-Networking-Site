import { redirect } from "react-router-dom";
import { getUserInfor, requestAuth } from "../../lib/Node/api";

export async function layoutLoader({request}) {
  const isAuthenticated = await requestAuth();
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
        userInfor: userInfor
      }
    );
  } catch (error) {
    console.log(error);
  }
  

}
