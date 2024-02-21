import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";

export const getUserForSidebar=async(req,res)=>{
try {
    const currentUserId = req.user._conditions._id
    const allUser = await User.find({_id:{$ne:currentUserId}}).select("-password").select("-email");
    res.status(200).send(allUser)
} catch (error) {
    res.status(500).send({
        success: false,
        message: error
    })
    console.log(error);
}
}

export const currentChatters=async(req,res)=>{
    try {
        const userId = req.user._conditions._id;
        const currentChatters = await Conversation.find({
            participants:userId
        })
        if (!currentChatters || currentChatters.length === 0) {
            return res.status(200).send([]);
        }
        const participantIds = currentChatters.reduce((ids, conversation) => {
            const otherParticipants = conversation.participants.filter(id => id !== userId);
            return [...ids, ...otherParticipants];
        }, []);
const otherParticipantIds = participantIds.filter(id => id.toString() !== userId.toString());
const users = await User.find({_id:{$in:otherParticipantIds}}).select("-password").select("-email");
res.send(users).status(200)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
        console.log(error);
    }
}

export const getUsersBySearch=async(req,res)=>{
    try {
        const search = req.query.search || '';
        const currentUserId = req.user._conditions._id
        console.log(search);
        const user = await User.find({
            $and:[
                {
                    $or:[
                        {username:{$regex:'.*'+search+'.*',$options:'i'}},
                        {fullname:{$regex:'.*'+search+'.*',$options:'i'}},
                    ]
                },{
                    _id:{$ne:currentUserId}
                }
            ]
          
        }).select("-password").select("-email");

      res.status(200).send(user)
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
        console.log(error);
    }
} 