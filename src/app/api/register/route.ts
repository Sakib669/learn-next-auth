import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    // get the data from frontend request
    const { email, password } = await req.json();

    await connectDB();
    // check if the user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    // add the user to the database
    const result = await User.create({
      email,
      password,
    });

    return NextResponse.json({
      user: result,
      message: "User registered successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
