import { SendEmail } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";

export async function GET(req,res){
    try {
        let reqBody= await req.json();
        const prisma= new PrismaClient();
        let count=await  prisma.employee.count({where:{Email:reqBody['Email'], OTP:reqBody['OTP']}});

        if(count === 1){
            return NextResponse.json({status:'sucess', data:"Verified OTP Code"})
        }else{
            return NextResponse.json({status:'fail', data:"Invalid OTP Code"})
        }
        
    } catch (error) {
        return NextResponse.json({status:'falie', data: error}) 
    }
}