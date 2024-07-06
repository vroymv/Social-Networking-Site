import { redirect } from "react-router-dom";
import { requestLogout } from "../lib/Node/api";

export async function logoutLoader() {
    await requestLogout();
    return redirect('/');
  }