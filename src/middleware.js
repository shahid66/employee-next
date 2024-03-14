import {NextResponse} from "next/server";
import {VerifyToken} from "./utility/JWTTokenHelper";
export async function middleware(req,res){
    try {
        let token=req.cookies.get('token');
        let payload=await VerifyToken(token['value'])
        const requestHeader=new Headers(req.headers);
        requestHeader.set('Email',payload['Email'])
        requestHeader.set('EmployeeID',payload['EmployeeID'])
        return NextResponse.next({request:{headers:requestHeader}})

    }catch (e) {
        const requestHeader=new Headers(req.headers);
        requestHeader.set('Email','0')
        requestHeader.set('EmployeeID','0')
        return NextResponse.next({request:{headers:requestHeader}})
    }

}

