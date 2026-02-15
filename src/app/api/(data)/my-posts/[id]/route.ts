import { connectDB } from "@/lib/db";
import POSTS from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: Promise<{ id: string }>;
};

export const DELETE = async (req: NextRequest, { params }: Props) => {
  const { id } = await params;
  console.log(id, " murgir gosto");
  connectDB();
  const res = await POSTS.findByIdAndDelete(id);

  if (!res) {
    return NextResponse.json(
      { message: "Invalid id or id is undefined" },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json(res);
};

export const PATCH = async (req: NextRequest, { params }: Props) => {
  const { id } = await params;
  const updatedPost = await req.json();
  await connectDB();
  const res = await POSTS.findByIdAndUpdate(
    id,
    { $set: updatedPost },
    { new: true, runValidators: true },
  );

  if (!res) {
    return NextResponse.json("Invalid id or invalid data", { status: 404 });
  }

  return NextResponse.json(res);
};
