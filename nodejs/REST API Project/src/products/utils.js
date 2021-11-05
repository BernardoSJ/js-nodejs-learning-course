const excelgenerator=(products,name,res)=>{
    const xl=require('excel4node');

    products=products.map(()=>{
        let id=products._id.toString();
        delete products._id;
        return {
            id,
            ...products
        }
    });

    let wb= new xl.Workbook();
    let ws=wb.addWorksheet('Inventory');

    for (let i= 1; i <=products.length; i++) {
        for (let  j= 1; j<=Object.values(products[0]).length; j++) {
            let data=Object.values(products[i-1])[j-1];
            if(typeof data==='string'){
                ws.cell(i,j).string(data);
            }else{
                ws.cell(i,j).number(data);
            }
        }
    }

    wb.write(`${name}.xlsx`,res);
};

module.exports.ProductsUtils={
    excelgenerator
}