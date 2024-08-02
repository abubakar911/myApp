// import { NextResponse } from "next/server"

// export async function POST(data){

//     let meradata = await data.json()

//     console.log(meradata)

//     return NextResponse.json({name : "awaiz"});

// }

import { NextResponse } from "next/server";
// import  {readFileSync} from "fs"
import {readFileSync} from "fs"
import path from "path";

export async function POST(result){
    let meraPath = path.resolve(__dirname,"../data.dat")
    
}