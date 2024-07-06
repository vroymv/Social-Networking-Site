import { Form } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { fileUploaderIcon } from "../../assets/icons";
import { sendFormData } from "../../lib/Node/api";

var data = {};
var mediaType;
export async function submitAction({ request }) {
  try {
    data.formText = Object.fromEntries(await request.formData());
    sendFormData(data, "createPost");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function PostForm(props) {
  const [imgUrl, setimgUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      data.imgType = file.type;
      mediaType = file.type.split("/")[0];
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

  return (
    <Form method="post" className="flex  flex-col">
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-2" htmlFor="caption">
          Caption
        </label>
        <textarea
          className="h-36 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] !important bg-[#101012] p-3 w-full"
          name="caption"
          id="caption"
        />
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium mb-2" htmlFor="file">
          Add Photos
        </label>
        <div
          className="flex flex-col justify-center items-center text-center h-[612px] border-none rounded-xl focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] !important bg-[#101012] p-8 w-full"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : imgUrl ? (
            mediaType == "image" ? (
              <div className="w-full h-[510px]">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={imgUrl}
                  alt="uploaded-photo"
                />
                <hr className="mt-4"></hr>
                <button type="button">Click or drag photo to replace</button>
              </div>
            ) : mediaType == "video" ? (
              <div className="w-full h-[510px]">
                <video className="w-full h-full object-cover rounded-md">
                  <source src={imgUrl} />
                </video>
              </div>
            ) : null
          ) : (
            <div className="flex  flex-col">
              <img src={fileUploaderIcon} alt="" />
              <p>Drap photo here</p>
              <p>SVG, PNG, JPG</p>
              <button type="button" className="rounded-lg p-2  bg-[#222273]">
                Select from Computer
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2" htmlFor="location">
          Add Location
        </label>
        <input
          className="border-none rounded-lg focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] !important bg-[#101012] p-3 w-full"
          type="text"
          name="location"
          id="location"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-sm font-medium mb-2" htmlFor="tags">
          Add Tags (separated by comma " , ")
        </label>

        <input
          className="border-none rounded-lg focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] !important bg-[#101012] p-3 w-full"
          type="text"
          name="tags"
          id="tags"
        />
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button className="bg-[#101012] rounded-lg py-2 px-4" type="button">
          Cancel
        </button>
        <button className="bg-[#877EFF] rounded-lg py-2 px-3" type="submit">
          Create Post
        </button>
      </div>
    </Form>
  );
}
