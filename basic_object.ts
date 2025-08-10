// Basic objects

function my_waifu_object(waifu_object: {name: string, age: number, husband:string})
{
    let waifu_properties = 
    {
        waifu_name: waifu_object.name,
        waifu_age: waifu_object.age,
        waifu_husband: waifu_object.husband
    }
    console.log(waifu_properties)
    return waifu_properties;
};

function ultimate_waifu_object( waifu_object:{name: string, age: number | string, fav_food: string, fav_drink: string, fav_spec: string})
{
    let waifus_properties = 
    {
        waifu_names: waifu_object.name,
        waifu_food: waifu_object.fav_food,
        waifu_drink: waifu_object.fav_drink,
        waifu_specify: waifu_object.fav_spec
    }
    console.log("My wife properties:", waifus_properties)
    return waifus_properties
}

let waifu = {name: "Bronya", age: 19, fav_food: "Moon cake", fav_drink: "cocktail", fav_spec: "hacker"}

let my_wife = {
    name: "Bronya",
    age: 19,
    favorite_food: {
        cooked_meal: ["Beef stew", "Steak", "Lasagna"],
        drink: ["Cocktail", "Champange", "Lemon soda"],
        desert: ["Tiramissu", "Mousse", "Souffle"]
    },
    job: "Hacker"
}

// Print my wife specific properties:

console.log("My wife favorite food is:",my_wife.favorite_food.cooked_meal[1])

// ultimate_waifu_object(waifu); // This is the dumpest object I've ever think of, I just test the function with dynamic objects :<
// console.log(`My wife favorite food is ${waifu.fav_food}`)