"use server";
import dbConnect from "@/dbConnect/dbConnect";
import User from "@/models/UserLists";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const UserAction = async (FormData) => {
  const name = FormData.get("name");
  const email = FormData.get("email");
  const password = FormData.get("password");
  const dataaa = {
    name,
    email,
    password: await bcrypt.hash(password, 10),
  };
  await dbConnect();
  await new User(dataaa).save();
  redirect("/");
};

export default UserAction;
