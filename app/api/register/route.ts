import connect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { name, email, password, region, phone } = await request.json();
    await connect();

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser)
      return NextResponse.json("Email is already taken", { status: 422 });

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      region,
      phone
    });

    await newUser.save();

    return NextResponse.json(newUser, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
    
  } catch (err) {
    console.log(err);
    return NextResponse.json("Database Error", { status: 500 });
  }
};