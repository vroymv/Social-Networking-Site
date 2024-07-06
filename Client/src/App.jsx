// React Router Authentication sample
//https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth-router-provider?file=src%2FApp.tsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorPage } from "./routes";
import Homefeed from "./routes/HomeFeed/Homefeed";
import Createpost from "./routes/CreatePost/Createpost";
import { submitAction } from "./routes/CreatePost/PostForm";
import LogIn, { loginAction } from "./routes/Login/LogIn";
import Register, { registerAction } from "./routes/Register/Register";
import { Layout } from "./routes/Layout/Layout";
import { layoutLoader } from "./routes/Layout/LayoutLoader";
import { loginLoader } from "./routes/Login/Loginloader";
import { logoutLoader } from "./routes/LogoutLoader";
import ProfileUpdate, { userUpdateSubmitAction } from "./routes/Updateprofile/ProfileUpdate";
import Messenger from "./routes/Messenger/Messenger";
import ChatThread, { sendMessagAction } from "./routes/Messenger/ChatThread";
import { messengerLoader } from "./routes/Messenger/messengerLoader";
import { ChatMessagersLoader } from "./routes/Messenger/chatMessagersLoader";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    loader: layoutLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homefeed />,
        errorElement: <ErrorPage />,
      },
      {
        path: "create-post",
        element: <Createpost />,
        errorElement: <ErrorPage />,
        action: submitAction,
      },
      {
        path: "profile/:userId",
        element: <ProfileUpdate />,
        errorElement: <ErrorPage />,
        action: userUpdateSubmitAction
      },
    ],
  },
  {
    path: "login",
    element: <LogIn />,
    errorElement: <ErrorPage />,
    action: loginAction,
    loader: loginLoader,
  },
  {
    path: "logout",
    loader: logoutLoader,
  },
  {
    path: "signup",
    element: <Register />,
    errorElement: <ErrorPage />,
    action: registerAction,
  },
  {
    path: "messenger",
    element: <Messenger />,
    errorElement: <ErrorPage />,
    loader:  messengerLoader,
    children: [
      {
        path: "/messenger/:chatthread",
        loader: ChatMessagersLoader,
        element: <ChatThread />,
        action: sendMessagAction
      },
    ],
  },
]);
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
