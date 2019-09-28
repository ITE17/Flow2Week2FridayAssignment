import 'bootstrap/dist/css/bootstrap.css'
//import jokes from "./jokes";

        let allUrl = "http://localhost:3333/api/users";

//const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}


const getIdInput = document.getElementById("inputId");
const returnSpecificUsers = document.getElementById("specificUser");
//du skal bruge en af nedenstående linje
//getIdInput.oninput = getUserById;
document.getElementById("specificUserButton").addEventListener("click", getUserById);
function getUserById() {
    var specificUser;
    fetch(allUrl + "/" + getIdInput.value).then(res => res.json())
//            .then(handleHttpErrors)
            .then(user => {
                specificUser =
                        "<tr><td>" + user.id + "</td>" +
                        "<td>" + user.name + "</td>" +
                        "<td>" + user.age + "</td>" +
                        "<td>" + user.gender + "</td>" +
                        "<td>" + user.email + "</td></tr>";

                document.getElementById("oneUser").innerHTML =
                        "<tr>" +
                        "<th>User id</th>" +
                        "<th>User name</th>" +
                        "<th>Age</th>" +
                        "<th>Gender</th>" +
                        "<th>Email</th>" +
                        "</tr>" +
                        specificUser;
            })
/*            .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e.detail));
                } else {
                    console.log("Network error");
                }
            })*/
            ;
}

document.getElementById("cleanIdInput").addEventListener("click", cleanIdInput);
function cleanIdInput() {
    document.getElementById("oneUser").innerHTML = "";
    document.getElementById("inputId").value = "";
}

document.getElementById("allUsersButton").addEventListener("click", allUsers);
function allUsers() {
    var users;
    fetch(allUrl).then(res => res.json())
            .then(data => {
                users = data.map(user =>
                    "<tr><td>" + user.id + "</td>" +
                            "<td>" + user.name + "</td>" +
                            "<td>" + user.age + "</td>" +
                            "<td>" + user.gender + "</td>" +
                            "<td>" + user.email + "</td></tr>");

                var userList = users.join("");
                document.getElementById("allUsers").innerHTML =
                        "<tr>" +
                        "<th>User id</th>" +
                        "<th>User name</th>" +
                        "<th>Age</th>" +
                        "<th>Gender</th>" +
                        "<th>Email</th>" +
                        "</tr>" +
                        userList;
            });
}

document.getElementById("clearAllUsersButton").addEventListener("click", clearAllUsers);
function clearAllUsers() {
    document.getElementById("allUsers").innerHTML = "";
}

document.getElementById("addUserButton").addEventListener("click", addUser);
const ageNewUser = document.getElementById("ageInput");
const nameNewUser = document.getElementById("nameInput");
const genderNewUser = document.getElementById("genderInput");
const emailNewUser = document.getElementById("emailInput");
function addUser() {
    let newUser = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameNewUser.value,
            age: ageNewUser.value,
            gender: genderNewUser.value,
            email: emailNewUser.value
        })
    };

    fetch(allUrl, newUser);
    document.getElementById("ageInput").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("genderInput").value = "";
    document.getElementById("emailInput").value = "";
}

document.getElementById("editUserButton").addEventListener("click", editUser);
const idEditUser = document.getElementById("idEditInput");
const ageEditUser = document.getElementById("ageEditInput");
const nameEditUser = document.getElementById("nameEditInput");
const genderEditUser = document.getElementById("genderEditInput");
const emailEditUser = document.getElementById("emailEditInput");
function editUser() {
    let editUser = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameEditUser.value,
            age: ageEditUser.value,
            gender: genderEditUser.value,
            email: emailEditUser.value
        })
    };

    fetch(allUrl + "/" + idEditUser.value, editUser);
    document.getElementById("idEditInput").value = "";
    document.getElementById("ageEditInput").value = "";
    document.getElementById("nameEditInput").value = "";
    document.getElementById("genderEditInput").value = "";
    document.getElementById("emailEditInput").value = "";
}

document.getElementById("deleteUserButton").addEventListener("click", deleteUser);
const idDeleteUser = document.getElementById("idDeleteInput");
function deleteUser() {
    let deleteUser = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(allUrl + "/" + idDeleteUser.value, deleteUser);
    document.getElementById("idDeleteInput").value = "";
}
