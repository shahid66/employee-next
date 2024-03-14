import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(email,id){
const secret= new TextEncoder().encode(process.env.JWT_SECRET);
const payload={Email:email,EmployeeID:id}

let token= await new SignJWT(payload)
.setProtectedHeader({alg:"HS256"})
.setIssuedAt()
.setIssuer(process.env.JWT_ISSUE)
.setExpirationTime(process.env.JWT_EXPAIRATION_TIME)
.sign(secret)

return token;
}


export async function VerifyToken(token){
    const secret= new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jwtVerify(token,secret)  

    return decoded['payload']
}