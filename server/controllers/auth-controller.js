const home = async(req,res)=>{
try{
    res.status(200).send("response from the server")
}
catch(error){
    console.log(error)
}
}
const reg = async(req,res)=>{
try{
    // res.status(200).send("response from the server this is a registration page")
    res.status(200).json({message:req.body})
    console.log(req.body)
}
catch(error){
    console.log(error)
}
}




module.exports={home,reg}