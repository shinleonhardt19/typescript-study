// Start mapping with Record 

//  Object define: Record<Key, Type>: Means that you define the data type for the key and also the value it carries
type Waifus = Record<string, string|number>;

const my_wife: Waifus = {
    waifu_1: "Bronya",
    waifu_2: "Aigis",
    1: "Priority number 1"
}

console.log(my_wife)
