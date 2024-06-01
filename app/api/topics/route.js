import connectMongoDB from "@/libs/mongodb"

export async function POST(request) {
    const {title, description} = await request.json()
    await connectMongoDB()
}
