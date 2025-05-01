const createPayer = (name, hp, mp, items) =>{
    return{
        name: name,
        hp: hp,
        mp: mp,
        items: items,
    };
   
};

const hanSolo = createPayer("Han Solo", 100, 10, ["Blaster"]);
console.log(hanSolo);

const darthVader = createPayer("Dart Vader", 200, 50, ["Saber"]);
console.log(darthVader);
