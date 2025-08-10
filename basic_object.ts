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

let waifu = {
    name: `Bronya`, 
    age: 19,
    husband: `Shin Leonhardt`
}

my_waifu_object(waifu)