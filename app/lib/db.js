
import mongoose from "mongoose"

export function connectKaro(){

    mongoose.connect('mongodb+srv://abubakar098:bakar098@cluster0.8g6dcu1.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0').then(function(connection){

        console.log(connection)
        console.log("db conncet hoyi")

    }).catch(function(err){
        console.log(err);
    });

}