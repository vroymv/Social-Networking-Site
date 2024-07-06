import { Form, Link, redirect, useLocation } from "react-router-dom";
import { logoIcon, sideImage } from "../../assets/images";
import { sendFormData } from "../../lib/Node/api";

export async function loginAction({ request }) {
  var status;
  let formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    status = await sendFormData(data, "login");
  } catch (error) {
    console.log(error);
  }
  if (status.success) {
    let redirectTo = formData.get("redirectTo");
    return redirect(redirectTo || '/');
  } else {
    return redirect('/');
  }
}

export default function LogIn(props) {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[50%] justify-center items-center">
        <div className="flex flex-col w-[60%]">
          <img src={logoIcon} alt="Snapgram  Logo" />
          <h2 className="text-center">Create a new account</h2>
          <p className="text-center">
            To use Snapgram, please enter your details
          </p>

          <Form className="flex flex-col" method="post">
          <input type="hidden" name="redirectTo" value={from} />
            <label htmlFor="email">Email</label>
            <input
              className="bg-[#101012] rounded-md h-12 mt-2"
              type="email"
              name="email"
              id="email"
            />
            <label className="mt-4" htmlFor="password">
              Password
            </label>
            <input
              className="bg-[#101012] rounded-md h-12 mt-2"
              type="password"
              name="pwd"
              id="password"
            />
            <button className="mt-4 bg-[#877EFF] rounded-md h-12" type="submit">
              Sign In
            </button>
            <div className="flex mt-4 justify-center gap-3">
              <p>Don't have an account?</p>

              <Link to="/signup">
                <span className="">Sign Up</span>
              </Link>
            </div>
          </Form>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          className="block object-cover w-full h-[100vh]"
          src={sideImage}
          alt="large photo of our services"
        />
      </div>
    </div>
  );
}
