import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try {
        let headerList= headers()
        let id=parseInt(headerList.get('EmployeeID'))
        let reqBody = await req.json();
        
        const prisma = new PrismaClient();
        let result= await prisma.employee.update({where:{EmployeeID:id},data:reqBody});
        
        return NextResponse.json({status:"sucess",data: result})

    } catch (error) {
        NextResponse.json({status:"Fail", data: error})
    }
}