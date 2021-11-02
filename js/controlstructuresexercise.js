{ // Days of the week
    var day="Monday";

    if(day=="Monday"){
        console.log("Lunes");
    } else if(day=="Tuesday"){
        console.log("Martes");
    }else if(day=="Wednesday"){
        console.log("Miercoles");
    }else if(day=="Thursday"){
        console.log("Jueves")
    }else if(day=="Friday"){
        console.log("Viernes");
    }else if(day=="Saturday"){
        console.log("Sabado");
    }else if(day=="Sunday"){
        console.log("Domingo");
    }

    switch(day){
        case "Monday":
            console.log("Lunes");
            break;
        case "Tuesday":
            console.log("Martes");
            break;
        case "Wednesday":
            console.log("Miercoles");
            break;
        case "Thursday":
            console.log("Jueves");
            break;
        case "Friday":
            console.log("Viernes");
            break;
        case "Saturday":
            console.log("Sabado");
            break;
        case "Sunday":
            console.log("Domingo");
            break;
    }

}

{   //Total
    var total=10;

    if(total<=10){
        total+=3;
    }else if(total<=20 && total>10){
        total+=5;
    }else if(total<=50 && total>20){
        total+=7;
    }else if(total>50){
        total=total;
    }
}