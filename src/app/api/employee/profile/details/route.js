import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try {
        let headerList= headers()
        console.log(headerList)
        
        let id=parseInt(headerList.get('EmployeeID'))
        
        const prisma = new PrismaClient();
        let result= await prisma.employee.findUnique({where:{EmployeeID:id}});
        
        return NextResponse.json({status:"sucess",data: result})

    } catch (error) {
        NextResponse.json({status:"Fail", data: error})
    }
}