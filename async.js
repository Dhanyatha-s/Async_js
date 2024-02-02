//callbacka

/*function one(call_two){
    console.log("step 1 has been executed and call step two");
    call_two();
}

function two (){
    console.log("step 2");
}
one(two);*/

//icecreem business

let stocks={
    fruits : ["Straberries","banana","Grapes","Coconuts"],
    liquid: ["Water","Ice"],
    holder: ["Cone","Cup","Stick"],
    toppings:["Chocolate","Peanuts"]
};

/*let order = (Fruits_name,call_productions)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[Fruits_name]} has selected`);
        call_productions()
    },2000)
}
let production = ()=>{
    setTimeout(()=>{
        console.log("Production has Started")
    })
}
order(0,production);*/

//promise
//in promise we have to look around the 
//1.relation b/w time AND work
//2.promise chain(resolve or reject) and .then
//3.event handling .catch
//4.Finally handler .finally

//1 and 2

let is_shop_open = true

/*let order = (time,work)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject(console.log(`our shop is closed`))
        }
    })
}
order(2000,()=>console.log(`${stocks.fruits[0]}`))

//.then to return the procedure of the making ice cream till serving it

.then(()=>{
    return order(0,()=>console.log("production has Started"))
})
.then(()=>{
    return order(2000,()=>console.log(`the Fruit was chopped`))
})
.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)
    })
})

.then(()=>{
    return order(1000,()=>{
        console.log("the machine has Started")
    })
})
.then(()=>{
    return order(2000, ()=>{
        console.log(`Ice Cream in ${stocks.holder[0]} container`)
    })
})

.then(()=>{
    return order(3000, ()=>{
        console.log(`${stocks.toppings[0]} as toppings`)
    })
})

.then(()=>{
    return order(2000,()=>{
        console.log("Ice Cream is ready to serve")
    })
})

//3

.catch(()=>{
    console.log("customer left");
})

.finally(()=>{
    console.log("Day is ended and Shop is Closed")
})

//Async/Await

//difference bw promise and await

//promise is of 
// resolve and reject  .then and .catch .finally

//async await is of
//try catch and finally if need .then()

async function orders(){
    try{
        await cooking;
    }
    catch(error){
        console.log("This function is not defined nor exist", error);
    }
    finally{
        console.log("This line runs anyway")
    }
}
orders().then(()=>{
    console.log("this is after part")
});
*/

//await

/*let toppings_selection = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log("Which type of Toppings would yoy like?"))
        },3000)
    })
}

async function Kitchen(){
    console.log("A")
    console.log("B")
    console.log("C")
    await toppings_selection()
    console.log("D")
    console.log("E")
}
Kitchen()
*/

//full solution to open the ice cream shop with promise and async await

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("The Shop is Closed"))
        }
    })
}

async function Kitchenery(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]}`)

        await time(1000)
        console.log("The Production has Started")

        await time(2000)
        console.log("the Fruit has Chopped")

        await time(3000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)

        await time(2000)
        console.log("The Machine has Started")

        await time(1000)
        console.log(`Ice cream is filled into ${stocks.holder[0]}`)

        await time(2000)
        console.log(`${stocks.toppings[0]} Toppings on it`)

        await time(1000)
        console.log("Ice Cream is Served")
    }
    catch(error){
        console.log("The Day Ended and Shop is Closed");
    }
    finally{
        console.log("The Shop is Closed")
    }
}
Kitchenery()