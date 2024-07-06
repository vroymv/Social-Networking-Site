import { Form, redirect, useOutletContext } from "react-router-dom";
import { editIcon, profilePlaceholder } from "../../assets/icons";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { sendFormData } from "../../lib/Node/api";

var data = {};

export async function userUpdateSubmitAction({ request }) {
  try {
    data.formText = Object.fromEntries(await request.formData());
    console.log(data);
    sendFormData(data, "updateProfile");
  } catch (error) {
    console.log(error);
  }
  return redirect('/');
}

export default function ProfileUpdate(props) {
  //Catching user data
  const userInfo = useOutletContext().userInfor;
  data.userId = userInfo._id;
  
  const [imgUrl, setimgUrl] = useState(userInfo.profileImage?userInfo.profileImage.imgUrl:null);

  

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setimgUrl(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  useEffect(() => {
    data.imgURL = imgUrl;
  }, [imgUrl]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function clearImage(e) {
    console.log(e);
    e.preventDefault();
    setimgUrl("");
  }

  return (
    <div className="w-[960px] mx-auto mt-16">
      <div className="flex items-center gap-2 mb-10">
        <img className="w-12 h-12" src={editIcon} alt="edit icon" />
        <h1 className="text-white text-3xl font-bold">Edit Profile</h1>
      </div>

      <div className="flex flex-col">
        <Form className="flex flex-col" method="post">
          <div {...getRootProps()} className="flex items-center gap-3 mb-4">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : imgUrl ? (
              <div className="flex w-full justify-between">
                <div className="flex gap-2">
                  <img
                    className={`rounded-full h-20 w-20`}
                    src={imgUrl || profilePlaceholder}
                    alt="profile-image"
                  />
                  <button
                    type="button"
                    className="text-[#7878A3] text-lg font-medium"
                  >
                    Change profile photo
                  </button>
                </div>
                <div>
                    <button type="button" onClick={(e)=>clearImage(e)}>
                        Clear Image
                    </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  className={`rounded-full h-20 w-20`}
                  src={profilePlaceholder}
                  alt="profile-image"
                />
                <button
                  type="button"
                  className="text-[#7878A3] text-lg font-medium"
                >
                  Change profile photo
                </button>
              </>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border-none rounded-lg focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] !important bg-[#101012] p-3 w-full"
              type="text"
              name="name"
              id="name"
              defaultValue={userInfo.name}
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border-none rounded-lg focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] !important bg-[#101012] p-3 w-full"
              type="text"
              name="username"
              id="username"
              defaultValue={userInfo.username}

            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              className="h-36 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] !important bg-[#101012] p-3 w-full"
              name="bio"
              id="bio"
              rows="6"
              defaultValue={userInfo.bio}

            />
          </div>

          <div className="flex justify-end">
            <button
              className="bg-[#877EFF] rounded-lg py-2 px-3 mt-6"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
