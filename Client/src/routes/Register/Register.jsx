import { Form, Link, redirect } from "react-router-dom";
import { logoIcon, sideImage } from "../../assets/images";
import { sendFormData } from "../../lib/Node/api";

export async function registerAction({ request }) {
    var status;
    try {
      const data = Object.fromEntries(await request.formData());
      status = sendFormData(data, "register");
    } catch (error) {
      console.log(error);
    }
    if (status) {
      return redirect("/");
    } else {
      return null;
    }
  }

export default function Register(props) {
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
          <label htmlFor="name">Name</label>
            <input
              className="bg-[#101012] rounded-md h-12 mt-2"
              type="text"
              name="name"
              id="name"
            />
            <label className="mt-4" htmlFor="username">Username</label>
            <input
              className="bg-[#101012] rounded-md h-12 mt-2"
              type="text"
              name="username"
              id="username"
            />
            <label className="mt-4" htmlFor="email">Email</label>
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
              <p>Already have an account?</p>

              <Link to="/login">
                <span className="">Sign In</span>
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
