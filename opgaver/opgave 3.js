var names = ["anders", "abla", "iben", "solle", "asger", "henning", "frode", "frida", "helge", "helga", "preben"];

Array.prototype.myMap = function(){ //du kan give function en metode med som callback
    var newArray = [];
    for(var y = 0; y < this.length; y++){      
        var reversedName = "";    
        for(var i = this[y].length; i >= 0; i--) {
            reversedName = reversedName + this[y].charAt(i);
        }
        newArray.push(reversedName);
    }
    return newArray;
};

var newMapNames = names.myMap();
console.log(newMapNames);

Array.prototype.myFilter = function(){
    var newArray = [];
    for(var i = 0; i < this.length; i++){
        if(this[i].includes("a")){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

var newFilterNames = names.myFilter();
console.log(newFilterNames);