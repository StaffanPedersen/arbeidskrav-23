import WarriorsModule from "./modules/WarriorsModule.js";

const warriorSelection = document.querySelector("#warrior-selection");
const warMachineSelection = document.querySelector(
  "#warmachineanimal-selection"
);

const showAllWarriors = () => {
  const warriors = WarriorsModule.getall().filter(
    (warrior) => warrior.category === "Warrior"
  );

  let htmltext = "";

  warriors.forEach((warrior) => {
    htmltext += `
    
        <article class=" flex flex-col items-center  rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" >
        <h3 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${warrior.name}</h3>
        <img src="images/${warrior.img}" class="w-2/5 h-3/5  " alt="${warrior.name}" />
        <p class="text-center font-bold p-2"> Gold: ${warrior.priceGold}  </p>
        <button class="add-to-army  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" data-name="${warrior.name}">Add to army</button>
      </article>   

    `;
  });

  warriorSelection.innerHTML = htmltext;

  const warmachines = WarriorsModule.getall().filter(
    (warrior) => warrior.category === "war-machine"
  );

  htmltext = "";

  warmachines.forEach((warrior) => {
    htmltext += `

        <article class=" flex flex-col items-center  rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h3 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${
          warrior.name
        }</h3>
        <img src="images/${warrior.img}" class="w-2/5 h-4/6  alt="${warrior.name}" />
        <p class="text-center font-bold  p-2"> Gold: ${
          warrior.priceGold
        } Wood: ${warrior.priceWood ? ` ${warrior.priceWood}` : "0"} Metal: ${
      warrior.priceMetal ? ` ${warrior.priceMetal}` : "0"
    } </p>
        <button class="add-to-army focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" data-name="${
          warrior.name
        }">Add to army</button>
      </article>
    `;
  });
  
  warMachineSelection.innerHTML = htmltext;

  const addToArmyButtons = document.querySelectorAll(".add-to-army");

  addToArmyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const warriorName = e.target.dataset.name;
      const warrior = WarriorsModule.getall().find(
        (warrior) => warrior.name === warriorName
      );

      if (warrior.priceGold) {
        WarriorsModule.setGold(-warrior.priceGold);
      }

      if (warrior.priceWood) {
        WarriorsModule.setWood(-warrior.priceWood);
      }

      if (warrior.priceMetal) {
        WarriorsModule.setMetal(-warrior.priceMetal);
      }

      const warriorInArmy = WarriorsModule.getArmy().find(
        (warrior) => warrior.name === warriorName
      );

      if (warriorInArmy) {
        WarriorsModule.setArmy(warriorName, 1);
      } else {
        WarriorsModule.setArmy(warriorName, 0);
      }

      showAllWarriors();
    });
  });
};

(() => {
  showAllWarriors();
})();
