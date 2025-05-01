const player = {
 name: "?",
 hp: 100,
 items: []
};

const hanSolo = player;
hanSolo.name = "Han solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ["Blaster"];

const darthVader = player;

console.log(hanSolo);
console.log(darthVader);