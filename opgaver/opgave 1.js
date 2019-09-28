var names = ["anders", "abla", "iben", "solle"];
//a
var aNames = names.filter(name => name.includes("a"));

console.log("------------------------- filter method -------------------------");
console.log(aNames);

var rNames = names.map(reversing);

console.log("------------------------- map method -------------------------");
console.log(rNames);

//b
function reversing(name){
    var reversedName = "";
    for(var i = name.length; i >= 0; i--){
        reversedName = reversedName + name.charAt(i);
    }
    return reversedName;
}