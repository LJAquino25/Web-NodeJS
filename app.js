let params = {
    nameUser: "John",
    password: "12345",
    isActive: false
};//Objeto de javascript | JSON: javascript object notation

//los fields de params son: nameUser, password y isActive

if(
    params.nameUser === "John" && 
    params.password === "12345" && 
    params.isActive === true
) {
    console.log("User authenticated successfully.");
} else {
    console.log("Authentication failed. Please check your username and password.");
}

