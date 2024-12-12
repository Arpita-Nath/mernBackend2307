const mongoose = require("mongoose")
const { Schema } = mongoose
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    address1: {
        type: String,
        required: true,
        trim: true,
    },
    address2: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user" , "admin" , "marchant"],
    },
    isVarified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: Number,
    },
},
{
    timestamps: true,
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;