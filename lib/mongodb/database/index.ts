import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cashed = (global as any).mongoose || {connection: null, promise: null};

export const connectToDatabase = async  () =>{
    if(cashed.connection) return cashed.connection;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing!')

    cashed.promise = cashed.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'hoodhub',
        bufferCommands: false
    })
    cashed.connection = await cashed.promise

    return cashed.connection
}