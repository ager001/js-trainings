class Player {
    constructor(name, hp, mp, items) {//constructor exist in prototype of player
        this.name = name,
        this.hp = hp,
        this.mp = mp,
        this.items = items;
    }

     speak(phrase) {//speak exist in prototype of player
        console.log(`${this.name} says: ${phrase}`);
     }
}



class AnotherPlayer {
    constructor(name, hp, mp, items) {
        this.name = name,
        this.hp = hp,
        this.mp = mp,
        this.items = items;

  }
    
  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
 }

}

class AnotherPlayer2 {
    constructor(name, hp, mp, items) {
        this.name = name,
        this.hp = hp,
        this.mp = mp,
        this.items = items;

  }
    
  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
 }

}

const hansolo = new Player("Han Solo", 100, 10, ['blaster']);
hansolo.speak("Never play with me!");
console.log(hansolo);

const Tina = new AnotherPlayer2("Tina Omondi", 100, 10, ['Wife Material']);
Tina.speak("I love you Michael!");
console.log(Tina);

const darthVader = new AnotherPlayer("Darth Vader", 50, 5, ['Saber']);
darthVader.speak("You will never walk alone")
console.log(darthVader);
