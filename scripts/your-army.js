import WarriorsModule from "./modules/WarriorsModule.js";

const warriorsSelection = document.querySelector("#army-output");

// function showing all warriors and warmachines from localstorage

const showBoughtAllWarriors = (warriorStorageArray) => {
  const warriors = WarriorsModule.getallArray();

  let htmltext = "";
  warriors.forEach((warrior) => {
    htmltext += `
        <article class="w-28 m-1 bg-blue-200 p-4 rounded-lg shadow-md w-1/12">
       
            <img src="images/${warrior.img}" class="w-20 h-20 " alt="${warrior.name}">
            <p class="text-center">${warrior.name}</p>
    
        </article>

      `;
  });
  warriorsSelection.innerHTML = htmltext;
};

(() => {
  showBoughtAllWarriors();
})();
