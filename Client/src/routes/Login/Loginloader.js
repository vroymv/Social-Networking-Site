import { redirect } from "react-router-dom";
import { requestAuth } from "../../lib/Node/api";

export async function loginLoader(){
    const isAuthenticated = await requestAuth();
    if(isAuthenticated.status) {
        return redirect('/');
    }
    return null;
}