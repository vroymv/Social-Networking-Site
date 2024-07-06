export default function Chatmsg(props) {
  return (
    <div className={`px-3 py-2 flex gap-2 w-fit h-fit bg-[#877EFF] rounded-[2.5rem] my-1 ${props.sender === "me"? "self-end" : "self-start"}`}>
      <p>{props.message}</p>
      <p className="text-[10px] flex items-end text-[#22222c]">{props.time}</p>
    </div>
  );
}
