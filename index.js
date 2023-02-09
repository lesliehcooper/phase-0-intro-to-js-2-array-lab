// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    name = "Ralph";
    cats.push(name);
    cats;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function destructivelyPrependCat(name) {
    name = "Bob";
    cats.unshift(name);
    cats;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function destructivelyRemoveLastCat() {
    cats.pop();
    cats;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function destructivelyRemoveFirstCat() {
    cats.shift();
    cats;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function appendCat(name) {
    name = "Broom";
    const appendCat = [...cats, name];
    return appendCat;
    cats;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function prependCat(name) {
    name = "Arnold";
    prependCat = [name, ...cats];
    return prependCat;
   }

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function removeLastCat() {
    removeLastCat = cats.slice(0, cats.length -1);
    return removeLastCat;
}


cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function removeFirstCat() {
    removeFirstCat = cats.slice(1);
    return removeFirstCat;
}