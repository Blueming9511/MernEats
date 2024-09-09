import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id: { //Id of user stored in off zero db
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    adddressLine1: {
        type: String,
    },
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    }
})

const User = mongoose.model("User", userSchema)
export default User