import WarriorsModule from "./modules/WarriorsModule.js";

const warriorsSelection = document.querySelector("#army-output");
const input = document.querySelector("input");

// function showing all warriors and warmachines from localstorage

const showBoughtAllWarriors = (value) => {
  const warriors = WarriorsModule.getallArray();

  const searcBoughthValue = value?.target.value.toLowerCase();

  let filteredBoughtWarriors;

  if (searcBoughthValue) {
    // Filter warriors based on search value (case insensitive)
    filteredBoughtWarriors = WarriorsModule.getallArray().filter((warrior) =>
      warrior.name.toLowerCase().includes(searcBoughthValue)
    );
  } else {
    // Show all warriors if no search value
    filteredBoughtWarriors = WarriorsModule.getallArray().filter(
      (warrior) =>
        warrior.category === "Warrior" || warrior.category === "war-machine"
    );
  }

  let htmltext = "";
  filteredBoughtWarriors.forEach((warrior) => {
    htmltext += `
        <article class="w-28 m-1 bg-blue-200 p-4 rounded-lg shadow-md w-1/12">
       
            <img src="images/${warrior.img}" class="w-20 h-20 " alt="${warrior.name}">
            <p class="text-center">${warrior.name}</p>
    
        </article>

      `;
  });
  warriorsSelection.innerHTML = htmltext;
};

input.addEventListener("input", (d) => {
  showBoughtAllWarriors(d);
});

(() => {
  showBoughtAllWarriors();
})();
