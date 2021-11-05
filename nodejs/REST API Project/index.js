const express=require('express');
const debug=require('debug')('app:main');

const {Config}=require('./src/config/index');
const {ProductsAPI}=require('./src/products/index')

const app=express();

app.use(express.json());

// Modules
ProductsAPI(app);

app.listen(Config.port,()=>{
    debug(`Server working on port ${Config.port}`);
});