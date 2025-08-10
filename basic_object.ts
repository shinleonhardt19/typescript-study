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


function ultimate_waifu_object(waifu_object: {name:{name_1:string, name_2:string, name_3:string};age: number;
                                             favorite_food:{food_1: string, food_2:string, food_3:string};
                                             favorite_drink:{drink_1:string, drink_2:string, drink_3:string};
                                             specify:{job_1:string, job_2:string, job_3:string}})
{
    let waifus_properties = 
    {
        waifu_names: waifu_object.name,
        waifu_food: waifu_object.favorite_food,
        waifu_drink: waifu_object.favorite_drink,
        waifu_specify: waifu_object.specify
    }
    console.log((waifus_properties))
    return waifus_properties
}

let waifu = {
    name: { name_1: "Aigis", name_2: "2B", name_3: "Bronya" },
    age: 18,
    favorite_food: { food_1: "Ramen", food_2: "Sushi", food_3: "Cake" },
    favorite_drink: { drink_1: "Tea", drink_2: "Coffee", drink_3: "Juice" },
    specify: { job_1: "Shadow executioner", job_2: "Fighter", job_3: "Hacker" }
}

ultimate_waifu_object(waifu); // This is the dumpest object I've ever think of, I just test the function with dynamic objects :<
