import fs from "fs"

export function Lire(){
    const pizzas = fs.readFileSync('/home/LOCAL.ISIMA.FR/aurabet/Documents/Pizzima2/src/services/pizzas.json');
    return JSON.parse(pizzas);
}