import { CreateToken } from "@/utility/JWTTokenHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    
    let email=reqBody['Email'] 
    let password=reqBody['Password']
    const prisma = new PrismaClient();
    const result = await prisma.employee.findUnique({where:{Email:email}});
    
    if(result.length === 0){
      return NextResponse.json({status:"fail", data: result})
    }else{
      let token= await CreateToken(result['Email'],result['EmployeeID'])
      let exppireDurations= new Date(Date.now()+24*60*60*1000);
      const cookieString=`token=${token}; Expires =${exppireDurations.toUTCString()};path=/`

      return NextResponse.json({status:"sucess",data:token}, {status:200, headers:{'set-cookie': cookieString}})
    }
   
  } catch (e) {
    console.log(e)
    return NextResponse.json({ status: "fail", data: e });
  }
}
