const express=require('express');
const App=express();
const PORT=process.env.PORT||3000;

App.get('/',(req,res)=>{
    res.send("Hello, World !");
});

App.listen(PORT,()=>{
    console.log(`Your server is running on http://localhost:${PORT}`)
})