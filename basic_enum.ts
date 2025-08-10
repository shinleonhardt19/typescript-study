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

// Another Object with Type

type classes = 'Wylder' | 'Dutchess' | 'Guardian' | 'Recluse' | 'Rider' | 'Revenant' | 'Ironeye' | 'Executioner'
type Nightfarers = {
    name: classes,
    passive: string,
    skill: string,
    ultimate: string,
    relics_1: {stat_1: string, stat_2: string, stat_3: string},
    relics_2: {stat_4: string, stat_5: string, stat_6: string},
    relics_3: {stat_7: string, stat_8: string, stat_9: string},
};

let player_3: Nightfarers = {name: 'Wylder', skill: 'Claw shot', ultimate: 'Onslaught stake', passive: 'Sixth sense',
    relics_1: {stat_1: "Str + 3", stat_2: "Int + 3", stat_3: "Dex + 3"},
    relics_2: {stat_4: "Ultimate gauge+ 3", stat_5: "Double use of Claw shot", stat_6: "Intial weapon inflict frostbite"},
    relics_3: {stat_7: "Damage boost using wielding 2 weapons", stat_8: "Attack up when using Greatsword", stat_9: "Increase def when HP is low"},
}

// console.log("Player 1 stats: ",player_1)
// console.log("Player 2 stats: ",player_2)
console.log("Player 3 stats: ", player_3)










