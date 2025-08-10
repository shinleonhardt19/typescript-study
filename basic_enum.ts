// Basic enum


// We can actually create a type
type attributes = 'str' | 'dex' | 'int' | 'faith';

enum Attributes { // Used to define a list with allowed keys
    Strength,
    Intelligence, 
    Dexterity,    
};

let str: Attributes = Attributes.Strength;

let player_1: attributes = 'int'; // This return type 'int'

// Object with Type

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

console.log("Player 1 stats: ",player_1)
console.log("Player 2 stats: ",player_2)











