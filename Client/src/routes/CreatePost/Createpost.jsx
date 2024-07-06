import { Button } from "./Button";
import { addPostIcon } from "../../assets/icons";
import { PostForm } from "./PostForm";
export default function Createpost(props) {
  return (
    <div className="flex flex-col p-20">
      <div className="flex gap-4">
        <img src={addPostIcon} alt="create-post-icon" />
        <h1 className="text-3xl  font-bold">Create Post</h1>
      </div>
      <div className="flex flex-col">
        <div className="mt-10">
          <PostForm />
        </div>

        
      </div>
    </div>
  );
}
