//a

var names = ["anders", "abla", "iben", "solle", "asger", "henning", "frode", "frida", "helge", "helga", "preben"];

function myFilter(array, callback){
    return callback(array);
}

function aCall(array){
    var newArray = [];

    for(var i = 0; i < array.length; i++){
        if(array[i].includes("a")){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function myFilter2(array, callback){
    for(var i = 0; i < array.length; i++){
        var numb = array[i];
        callback(numb);
    }
}

function aCall2(arg){
    var newArray = [];

    if(arg.includes("a")){
            newArray.push(arg);
    }
    return newArray;
}

console.log(myFilter(names, aCall));
//console.log(myFilter2(names, aCall2));

//b
var names = ["anders", "abla", "iben", "solle", "asger", "henning", "frode", "frida", "helge", "helga", "preben"];

function myMap(array, callback){
    return callback(array);
}

function aCall(array){
    var newArray = [];
    for(var y = 0; y < array.length; y++){      
        var reversedName = "";    
        for(var i = array[y].length; i >= 0; i--) {
            reversedName = reversedName + array[y].charAt(i);
        }
        newArray.push(reversedName);
    }
    return newArray;
}

console.log(myMap(names, aCall));