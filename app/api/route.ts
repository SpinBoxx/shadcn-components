import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await prismadb.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  return NextResponse.json({ user });
}
