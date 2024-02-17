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