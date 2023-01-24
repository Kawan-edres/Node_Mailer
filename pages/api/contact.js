// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

async function handler (req, res) {
  console.log(req.body);
  if(req.method === "POST"){
    const data=req.body;
    if(!data.name || !data.email || !data.subject || !data.message){
      return   res.status(400).json({ message: 'Bad Request' })

    }
    try{
  await transporter.sendMail({
    from:data.email,
    ...mailOptions,
    subject:data.subject,
    text:"This is Test ",
    html:`<h1>${data.name}</h1> </br> <p>${data.message}</p>`,
  })
  res.status(200).json({ success:true })

    }catch(error){
      return   res.status(400).json({ message: error.message })


    }

  }
 
}


export default handler;