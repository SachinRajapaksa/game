// let customer = {
//     name:"Sachin",
//     age:21,
//     address:"Maharagama"
// }
// console.log(customer);

// let Js=JSON.stringify(customer);

// console.log(Js);

// console.log(Js.name);

// let JSO=JSON.parse(Js);
// console.log(JSO.name,JSO.age,JSO.address);

// console.log(JSO);

// let fun=val =>{ return "Hello World!!!"+val};
// console.log(fun("Sachin")
let r=Math.random()*10;
console.log(r.toFixed());
let index=0;

function run(){
document.getElementById("num");

    index++;
    if(index<3){
        if(num.value==r.toFixed()){
                alert("Your Won")
                console.log("Your won");
    }
    else if(num.value<r.toFixed()) 
            {alert("Your value is lower than the guess value ")
            console.log("Your value is lower than the guess value ");}

    else if (num.value>r.toFixed()) 
        {alert("Your value is higher than the guess value ")
        console.log("Your value is higher than the guess value ");}
}
else if(3<index){
        alert("Your Loose")
        console.log("Your Loose");
        
}
}

