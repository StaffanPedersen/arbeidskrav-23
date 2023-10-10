import ResourcesModule from "./modules/ResoursesModule.js";
import WarriorsModule from "./modules/WarriorsModule.js";
import { showResourses } from "./getting-resources.js";

// html injection
const warriorSelection = document.querySelector("#warrior-selection");
const warMachineSelection = document.querySelector(
  "#warmachineanimal-selection"
);

// function showing all warriors and warmachines
const showAllWarriors = () => {
  const warriors = WarriorsModule.getall().filter(
    (warrior) => warrior.category === "Warrior"
  );

  let htmltext = "";

  // html injection warriors
  warriors.forEach((warrior) => {
    htmltext += `
    
        <article class=" flex flex-col items-center  rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" >
        <h3 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${warrior.name}</h3>
        <img src="images/${warrior.img}" class="w-2/5 h-3/5  " alt="${warrior.name}" />
        <p class="text-center font-bold p-2"> Gold: ${warrior.priceGold}  </p>
        <button class=" btn-add-to-army-warrior focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" data-name="${warrior.name}">Add to army</button>
      </article>   

    `;
  });

  warriorSelection.innerHTML = htmltext;

  const warmachines = WarriorsModule.getall().filter(
    (warrior) => warrior.category === "war-machine"
  );

  htmltext = "";

  // html injection warmachines
  warmachines.forEach((warrior) => {
    htmltext += `

        <article class=" flex flex-col items-center  rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h3 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${
          warrior.name
        }</h3>
        <img src="images/${warrior.img}" class="w-2/5 h-4/6  alt="${
      warrior.name
    }" />
        <p class="text-center font-bold  p-2"> Gold: ${
          warrior.priceGold
        } Wood: ${warrior.priceWood ? ` ${warrior.priceWood}` : "0"} Metal: ${
      warrior.priceMetal ? ` ${warrior.priceMetal}` : "0"
    } </p>
        <button class="btn-add-to-army-warmachine  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" data-name="${
          warrior.name
        }">Add to army</button>
      </article>
    `;
  });

  warMachineSelection.innerHTML = htmltext;
};

//buttons
const addWarriorbtn = document.querySelectorAll(".btn-add-to-army-warrior");
const addWarmachinebtn = document.querySelectorAll(
  ".btn-add-to-army-warmachine"
);

const checkAddWarrior = (e) => {
  const warriorName = e.target.dataset.name;
  const warrior = WarriorsModule.getWarrior(warriorName);

  if (ResourcesModule.getGold() >= warrior.priceGold) {
    ResourcesModule.setGold(-warrior.priceGold);
    WarriorsModule.addWarrior(warrior);
    showAllWarriors();
  } else {
    alert("You dont have enough gold");
  }
  showResourses();
};

// add warmachine to army

const checkAddWarmachine = (e) => {
  const warmachineName = e.target.dataset.name;
  const warmachine = WarriorsModule.getWarrior(warmachineName);

  if (
    ResourcesModule.getGold() >= warmachine.priceGold &&
    ResourcesModule.getWood() >= warmachine.priceWood &&
    ResourcesModule.getMetal() >= warmachine.priceMetal
  ) {
    ResourcesModule.setGold(-warmachine.priceGold);
    ResourcesModule.setWood(-warmachine.priceWood);
    ResourcesModule.setMetal(-warmachine.priceMetal);
    WarriorsModule.addWarrior(warmachine);
    showAllWarriors();
  } else {
    alert("You dont have enough resources");
  }
  showResourses();
};

// Event delegation for addWarriorbtn and addWarmachinebtn
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-add-to-army-warrior")) {
    checkAddWarrior(e);
  } else if (e.target.matches(".btn-add-to-army-warmachine")) {
    checkAddWarmachine(e);
  }
});

(() => {
  showAllWarriors();
})();
