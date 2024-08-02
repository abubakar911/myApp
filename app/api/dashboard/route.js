import { NextResponse } from "next/server";

export async function POST(req){

    // incoming data siraf POST/PUT m ayega
    let data = await req.json();

    // response to laazmi return krna
    return NextResponse.json({

    })

}