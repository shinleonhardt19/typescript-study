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



