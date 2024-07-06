import { convosFromMe } from "../../Constants";
import { getMessages } from "../../lib/Node/api";

export async function ChatMessagersLoader({request}) {
    var messages;
    try{
        messages = await getMessages();
    }catch(err){
        console.log(err);
    }

    return messages;
}
