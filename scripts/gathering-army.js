import WarriorsModule from "./modules/WarriorsModule.js";

const warriorSelection = document.querySelector("#warrior-selection");

const showAllWarriors = () => {
  const warriors = warriorsArray.getall();

  let htmltext = "";

  warriors.forEach((warrior) => {
    htmltext += `
        <article class="warrior">
        <h3>${warrior.name}</h3>
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
