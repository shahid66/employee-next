import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function POST(req,res){
    try {
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const count=await prisma.employee.count({where:{Email:reqBody['Email'],OTP:reqBody['OTP']}});
        console.log(count)
        if(count===1){

            await prisma.employee.update({
                where:{Email:reqBody['Email']},
                data:{OTP:0,Password:reqBody['Password']}
            })

            return  NextResponse.json({status:"success",data:"Password Reset Success"})
        }
        else {
            return  NextResponse.json({status:"fail",data:"Password Reset Fail"})
        }

    }catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}