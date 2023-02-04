/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const info = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
info.name = "Demetrio Aris";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
info.photo = "images/demPhoto.png";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
info.favoriteFood = ["Espagueti", " Hamburger", " Tacos"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
info.hobbies = ["Listen music", "Dance", "Play VideoGames"];
// Step 6: Add another property named placesLived with a value of an empty array
info.placesLived = [
    // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
    // Step 8: For each property, add appropriate values as strings
    // Step 9: Add additional objects with the same properties for each place you've lived
    {
        place: "Panamá",
        length: "3 Years",
    },
    {
        place: "Mexico",
        length: "2 Years",
    },
];

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above)
// to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = info.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("img").setAttribute("src", info.photo);
document.querySelector("img").setAttribute("width", "150");
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("img").setAttribute("alt", "Photo perfil Demetrio");
// Step 4: For each favorite food in the favoriteFoods property,
// create an HTML <li> element and place its value in the <li> element
info.favoriteFood.forEach((favFood) => {
    let li = document.createElement("li");
    let content = document.createTextNode(favFood);
    li.appendChild(content);
    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector("#favorite-foods").appendChild(li);
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
info.hobbies.forEach((favHobbies) => {
    let li = document.createElement("li");
    let content = document.createTextNode(favHobbies);
    li.appendChild(content);
    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector("#hobbies").appendChild(li);
});
// Step 8: For each object in the <em>placesLived</em> property:
info.placesLived.forEach((placesLived) => {
    // - Create an HTML <dt> element and put its place property in the <dt> element
    let places = document.createElement("dt");
    places.textContent = placesLived.place;
    // - Create an HTML <dd> element and put its length property in the <dd> element
    let lengthPlaces = document.createElement("dd");
    lengthPlaces.textContent = placesLived.length;
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector("#places-lived").appendChild(places);
    document.querySelector("#places-lived").appendChild(lengthPlaces);
});
