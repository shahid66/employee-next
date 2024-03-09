import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.employee.findMany();
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.employee.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
