// 
const url = "https://digimon-api.vercel.app/api/digimon";

//declare a variable
let listDigimon = [];
// function to create attributes where my data will display
function output(digimons) {
    digimons.forEach((digimon) => {
        let article = document.createElement("article");
        switch (digimon.level) {
            case "In Training":
                article.setAttribute("data-level", "In Training");
                article.setAttribute("style", "border: solid black");
                break;
            case "Training":
                    article.setAttribute("data-level", "In Training");
                    article.setAttribute("style", "border: solid black");
                    break;
            case "Rookie":
                article.setAttribute("data-level", "Rookie");
                article.setAttribute("style", "border: solid green");
                break;
            case "Champion":
                article.setAttribute("data-level", "Champion");
                article.setAttribute("style", "border: solid yellow");
                break;
            case "Ultimate":
                article.setAttribute("data-level", "Ultimate");
                article.setAttribute("style", "border: solid orange");
                break;
            case "Fresh":
                article.setAttribute("data-level", "Fresh");
                article.setAttribute("style", "border: solid blue");
                break;
            case "Mega":
                article.setAttribute("data-level", "Mega");
                article.setAttribute("style", "border: solid red");
                break;
            case "Armor":
                article.setAttribute("data-level", "Armor");
                article.setAttribute("style", "border: solid gray");
                break;
            default:
                break;
        }

        let name = document.createElement("h2");
        name.textContent = `Name: ${digimon.name}`;

        let level = document.createElement("h3");
        level.textContent = `Level: ${digimon.level}`;

        let digimonImg = document.createElement("img");
        digimonImg.setAttribute("src", digimon.img);
        digimonImg.setAttribute("alt", digimon.name);

        article.appendChild(name);
        article.appendChild(level);
        article.appendChild(digimonImg);

        document.querySelector("#digimon").appendChild(article);
    });
}

const getDigimon = async () => {
    const response = await fetch(url);

    listDigimon = await response.json();

    output(listDigimon);
};
getDigimon();

const digimonList = document.querySelector("#digimon");
const levelSelect = document.querySelector("#level-select");

levelSelect.addEventListener("change", function () {
    const selectedLevel = this.value;
    if (selectedLevel === "all") {
        digimonList.querySelectorAll("article").forEach(function (digimon) {
            digimon.style.display = "block";
        });
        return;
    }

    digimonList.querySelectorAll("article").forEach(function (digimon) {
        digimon.style.display = "none";
    });
    
    digimonList
        .querySelectorAll(`article[data-level="${selectedLevel}"]`)
        .forEach(function (digimon) {
            digimon.style.display = "block";
        });
});
