// Basic enum


// We can actually create a type
type attributes = 'str' | 'dex' | 'int' | 'faith';

enum Attributes { // Used to define a list with allowed keys
    Strength,
    Intelligence, 
    Dexterity,    
};

let str: Attributes = Attributes.Strength;

let player: attributes = 'int'; // This return type 'int'
console.log(player)









