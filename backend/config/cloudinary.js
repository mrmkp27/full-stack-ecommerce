import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_Name,
        api_key: process.env.CLOUDINARY_API_Key,
        api_secret: process.env.CLOUDINARY_Secret_Key
    })
} 

export default connectCloudinary;