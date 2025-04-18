let pizza 

function orderPizza() {
    console.log("Order Pizza")
    setTimeout(() => {
        pizza = "Peperroni"
        console.log(`${pizza} is ready` )
    }, 2000)
    console.log("Pizza was ordered")
}
orderPizza()
console.log("call Tina")
console.log(`Eat ${pizza}`)