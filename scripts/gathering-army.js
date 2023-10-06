import WarriorsModule from "./modules/WarriorsModule.js";

const warriorSelection = document.querySelector("#warrior-selection");

const showAllWarriors = () => {
  const warriors = WarriorsModule.getall();

  let htmltext = "";

  warriors.forEach((warrior) => {
    htmltext += `
    
        <article >
        <h3>${warrior.name}</h3>
        <img src="images/${warrior.img}" alt="${warrior.name}" />
        <p>Price: ${warrior.price}</p>
        <p>Category: ${warrior.category}</p>
        <button class="add-to-army" data-name="${warrior.name}">Add to army</button>
      </article>   

    `;
  });
  warriorSelection.innerHTML = htmltext;
};

(() => {
  showAllWarriors();
})();
