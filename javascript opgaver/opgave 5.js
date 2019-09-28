var all= ["Lars", "Peter", "Jan", "Bo"];

//a
var joinedAllSpace = all.join(" ");
var joinedAllComma = all.join(", ");
var joinedAllNumber = all.join("#");
//console.log(joinedAllNumber );

//b
numbers = [2, 3, 67, 33]; 
var reducedNumbers = numbers.reduce(adding);
function adding(total, num){
    return total + num;
}
//console.log(reducedNumbers);

//c
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];

var reducer = function(accumulator, member,index,arr ){
    if(index+1 == arr.length){
        accumulator + arr[index].age; 
        return accumulator/arr.length;
    }
    return accumulator + arr[index].age; 
}

var memberAge = members.reduce(reducer, 0);
console.log(memberAge);
//console.log(members[1].name);
//console.log(members.length);