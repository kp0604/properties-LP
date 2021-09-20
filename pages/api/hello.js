// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json({
    Name: "The Pavillion 3",
    Address:"Outer Ring Road, Bangalore",
    Area: "52,277",
    Price: "₹12,338",
    Yield: "9.14%",
    RetTar: "18.1%",
    FunStac1: "20",
    FunStac0: "0"
    
  })
}
