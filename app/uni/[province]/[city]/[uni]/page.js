"use client";

import { useParams } from "next/navigation"

export default function hello() {

    let meraData = useParams()

    return <div>
       <h1>yeh product h {meraData.province} {meraData.city} {meraData.uni}</h1>
    </div>

}