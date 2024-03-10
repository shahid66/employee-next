import { SendEmail } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try {
        const prisma= new PrismaClient()
        let{searchParams}=new URL(req.url);
        let email = searchParams.get('email');

        let count=await  prisma.employee.count({where:{email:email}});
        if(count===1){
            let code= Math.floor(100000+Math.random()*900000)
            let EmailText= `Your OTP code is =${code}`
            let EmailSubject= "Next JS Verification Code";

            await SendEmail(email,EmailText, EmailSubject);

            let result= await prisma.employee.update({
                where:{email:email},
                data:{otp:code}
            })

            return NextResponse.json({status:"sucess", data: result})

        }else{
            return NextResponse.json({status:'fail', data:"No Employee Found"})
        }


        
    } catch (error) {
        return NextResponse.json({status:'falie', data: error})
    }
}