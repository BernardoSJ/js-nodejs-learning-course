const express=require("express");

const SERVICE=require("./src/service");

const app=express();

const PORT=3000;

app.use(express.json());

app.get('/',(request,response)=>{
    response.json({
        message:"Data",
        body:SERVICE.getUsers()
    });
});

app.get('/:id',(request,response)=>{

    let {params:{id}}=request;
    let user=SERVICE.getUser(id);
    response.json({
        message:"Data",
        body:user
    });
});

app.post('/',(request,response)=>{
    let {body:newUser}=request;

    response.json({
        message:"Register added",
        body:SERVICE.createUser(newUser)
    })
});

app.listen(PORT, ()=>{
    console.log(`Server working on http://localhost:${PORT}`);
});