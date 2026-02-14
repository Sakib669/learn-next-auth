import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import POSTS from "@/models/Post";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: Promise<{ id: string }>;
};

export const GET = async (req: NextRequest, { params }: Props) => {
  const { id } = await params;
  // console.log(id);

  const session = getServerSession(authOptions);
  console.log(session);

  const post = await POSTS.findById({ _id: id });

  if (!post) {
    return NextResponse.json(
      { message: "File not found" },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({ message: "specific route is working", post });
};

export const DELETE = async (req: NextRequest, { params }: Props) => {
  const { id } = await params;
  // console.log(id);

  // const session = getServerSession(authOptions);
  // console.log(session);

  const result = await POSTS.findByIdAndDelete({ _id: id });

  if (!result) {
    return NextResponse.json(
      { message: "File not found" },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({ message: "specific route is working", result });
};

export const PATCH = async (req: NextRequest, { params }: Props) => {
  const { id } = await params;
  const body = await req.json();

  const updatedPost = await POSTS.findByIdAndUpdate(
    id,
    { $set: body },
    { new: true, runValidators: true },
  );

  if (!updatedPost) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(updatedPost);
};
