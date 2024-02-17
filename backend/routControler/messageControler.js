import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage=async(req,res)=>{
try {
   const {message} = req.body
   const {id:reciverId} = req.params;
   const senderId = req.user._conditions._id;

   //in this chats we are making the chats bettwen people
    let chats = await Conversation.findOne({
        participants:{ $all:[senderId , reciverId]}
    })
    //if no chat present bettwen this two people it will create a new chat 
    if(!chats){
        chats = await Conversation.create({
            participants:[senderId , reciverId],
        })
    }
    //the new message will be created 
    const newMessage = new Message({
        senderId,
        reciverId,
        message,
    })
    //we are not saving the chat by  await newMessage.send()

    if(newMessage){
        //if message happen it will be pushed to conversationSchema
        chats.messages.push(newMessage._id);
    }

    //SOCET IO funcationality 

    //await chats.save();
   // await newMessage.save();
    //faster method
    await Promise.all([chats.save(),newMessage.save()]);

    res.status(201).send(newMessage)
} catch (error) {
    res.status(500).send({
        success: false,
        message: error
    })
    console.log(error);
}
}

export const getMessage=async(req,res)=>{
    try {
        const {id:reciverId} = req.params;
        const senderId = req.user._conditions._id;

        //for getting the chat both reciver and send are required
        const chats = await Conversation.findOne({
            participants:{$all:[senderId,reciverId]}
        }).populate("messages"); //actual messages

        if(!chats) res.status(200).send([]);
        const message = chats.messages;
        res.status(200).send(message)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
        console.log(error);
    }
}