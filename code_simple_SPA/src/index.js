import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

let url = "https://studypoints.info/jokes/api/jokes/period/hour";
document.getElementById("hourButton").addEventListener("click", updateDiv);
function updateDiv() { //dette projekt er asynkront, AJAX
    fetchJoke("hourId");
}

document.getElementById("hourlyJokeButton").addEventListener("click", getJokeInterval);
function getJokeInterval() {
    setInterval(fetchJoke("hourlyJoke"), 1000 * 60 * 60);
}

function fetchJoke(element) {//dette projekt er asynkront, AJAX
    var joked;//så denne variabel erklæres
    fetch(url).then(res => res.json()) //dette går i gang og kører asynkront
            .then(joke => {
                joked = "<p>" + joke.joke + "</p>";
                document.getElementById(element).innerHTML = joked;//se nedenunder
            });
    //setTimeout(function(){ alert("Hello"); }, 6000);
    //Hvis nedenstående linje var ikke var udkommenteret ville den køre før fetch, fordi programmet kører asynkront
 // document.getElementById("hourId").innerHTML = joked;
}

/*
 * Alt nedenudner er til jokes
 */

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");
//
//function getInput(){
//    var x = document.getElementById("myInput").value;
//    document.getElementById("jokes").innerHTML = "You wrote: " + x;
//}
//
////finder elementet med "repeat" taggen
////const repeat = document.getElementById("repeat");
////finder elementet med "input" taggen, og dermed dets indhold
////const inp = document.getElementById("inputId");
////inp.oninput tager tager fra inp og udfører en funktion
////()=> er for funktioner uden parametrer 
////inp.oninput = ()=> repeat.innerText = jokes.getJokeById(inp.value);
//const repeat = document.getElementById("repeat");
//const inp = document.getElementById("inputId");
//inp.oninput = getJoke;
//function getJoke(){
//    repeat.innerText = jokes.getJokeById(inp.value);
//}
//
////se i jokes.js og joke.html
//let jokeInput = document.getElementById("add");
//let theJoke = document.getElementById("added");
//document.getElementById("button").addEventListener("click", getInputJoke);
//function getInputJoke(){
//   let joke = jokeInput.value;
//   console.log(joke);
//   jokes.addJoke(joke);
//  theJoke.innerText = joke;
//   jokeInput.value = "";
//};
