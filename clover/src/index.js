import 'bootstrap/dist/css/bootstrap.css'
//import jokes from "./jokes";
//
//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");

document.getElementById("north").addEventListener("click", northWrite);
function northWrite(){
    document.getElementById("write").innerHTML = "<p> North </p>";
}

document.getElementById("south").addEventListener("click", southWrite);
function southWrite(){
    document.getElementById("write").innerHTML = "<p> South </p>";
}
document.getElementById("west").addEventListener("click", westWrite);
function westWrite(){
    document.getElementById("write").innerHTML = "<p> West </p>";
}
document.getElementById("east").addEventListener("click", eastWrite);
function eastWrite(){
    document.getElementById("write").innerHTML = "<p> East </p>";
}