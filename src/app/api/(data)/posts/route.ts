import { connectDB } from "@/lib/db";
import POSTS from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  await connectDB();
  const result = await POSTS.create(data);
  if (!result) {
    return NextResponse.json(
      { message: "failed creating post" },
      { status: 500 },
    );
  }
  console.log(result);
  return NextResponse.json(result);
};

export const GET = async () => {
  await connectDB();
  const posts = await POSTS.find();
  if (!posts) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 },
    );
  }
  return NextResponse.json(posts);
};
