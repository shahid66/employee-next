import nodemailer from 'nodemailer'

export async function SendEmail(EmailTo,EmailText,EmailSubject){
    let Transport= nodemailer.createTransport({
        host:"",
        port:"",
        secure:false,
        auth:{
            user:"",
            pass:""
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    let MailOption={
        from:"Next JS News Portal <info@gmail.com>",
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return await Transport(MailOption)
}