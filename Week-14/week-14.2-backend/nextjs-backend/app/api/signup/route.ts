import {NextRequest} from "next/server"
import { PrismaClient } from "@/app/generated/prisma/client";
const client = new PrismaClient()

export async function POST(req:NextRequest){
    // extract the body
    const body = await req.json();
    // store the body in DB
    const user = await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    console.log(user.id);
    
    
    return Response.json({
        message:"You are Logged in!!"
    })
}