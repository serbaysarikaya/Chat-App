import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    reserverId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    message: {
        type: String,
    },image:{
        type: String,
        required: false
    }

},
{timestamps: true});    

const Message = mongoose.model("Message", messageSchema);

export default Message