import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, description} = await request.json()
    await connectMongoDB();
    await Topic.create({title, description})
    return NextResponse.json({message:" تاپیک ایجاد شد"}, {status: 201})
}

export async function GET(){
    await connectMongoDB()
    await Topic.find()
}
