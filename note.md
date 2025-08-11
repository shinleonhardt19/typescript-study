# Let's start learning Typescript

**Print to screen**
<pre> console.log("Shin Leonhardt") </pre>

**Source zshrc**
<pre> nano ~/.zshrc </pre>
<pre> source ~/.zshrc </pre>

**Any type**
<pre> let userName: any // this will declare any variable </pre>

**Union type**
<pre> let age: string | number | boolean = 36; // This is called Union type, anything beside this type will automatically error </pre>

**Array type**
<pre> 
let userName: string[] // Define an array
let userName: (string | number)[] // Define an array which have the union of string and number
let userName: Array<string | number>; // Another way to define an array which have the union of string and number
</pre>

**Tuple type**
<pre>let person: [string, number] = [`Bronya`,19]; // name, signature_number</pre>

**Object type**
<pre>let my_wife = {
    name: "Bronya",
    age: 19,
    favorite_food: {
        cooked_meal: ["Beef stew", "Steak", "Lasagna"],
        drink: ["Cocktail", "Champange", "Lemon soda"],
        desert: ["Tiramissu", "Mousse", "Souffle"]
    },
    job: "Hacker"
}</pre>

**Object defining**
Defining an object with the data type of both key and value
<pre>
type Waifus: Record<string|number|any, string|number>;
const my_wife: Waifus = {
    waifu_1: "Bronya", // The key can be a string 
    waifu_2: "Aigis", // The key can be a number
    1: "Priority number 1" // The key can be any
} // The value carried by the keys can be either string or number since it is declared as string|number
</pre>

**Create Type**
<pre>
type Attributes: 'str' | 'dex' | 'int' | 'faith'; // create a type
let player: Attributes = 'int';
</pre>

**Object with Type**
<pre>
type Player = {
    name: string;
    class: string;
    height: number,
    str: number;
    int: number;
    sta: number;
    dex: number;
    faith: number;
};

let player_2: Player = {name: 'Shin Leonhardt', class: 'Mage', height: 175, str: 40, int: 80, sta: 35, dex:40, faith:19}
</pre>

**