import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        reqired:true        
    },
    phone:{
        type:String,
        reqired:true        
    },
    address:{
        type:String,
        reqired:true        
    },
    answer:{
        type:String,
        reqired:true        
    },
    role:{
        type:Number,
        default:0        
    }
}, {timestamps:true})

export default mongoose.model('users', userSchema)