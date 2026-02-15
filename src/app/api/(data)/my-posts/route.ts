import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";
import POSTS from "@/models/Post";
import { connectDB } from "@/lib/db";

export const GET = async (req: NextRequest) => {
  const { user }: any = await getServerSession(authOptions);
  const { email } = user;
  await connectDB();
  const myPosts = await POSTS.find({ email });

  return NextResponse.json(myPosts);
};
