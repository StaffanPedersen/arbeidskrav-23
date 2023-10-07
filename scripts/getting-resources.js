import ResoursesModule from "./modules/ResoursesModule.js";

const resoursesSelection = document.querySelector("#resources-output");

const showResourses = () => {
  const resourses = ResoursesModule.getall();

  let htmltext = "";

  resourses.forEach((resourse) => {
    htmltext += `
        <article class="w-64 h-64   flex w-full ">
            <div  class="flex-1 p-4 text-center flex items-center justify-center">
                <img src="images/gold-coin.png" class="w-20 h-20" alt="gold">
                <p class="text-center"> Gold: ${resourse.gold} </p>
            </div>
            <div class="flex-1 p-4 text-center flex items-center justify-center">
                <img src="images/wood.png" class="w-20 h-20 " alt="wood">
                <p class="text-center"> Wood: ${resourse.wood} </p>
            </div>
            <div class="flex-1 p-4  text-center flex items-center justify-center">
                <img src="images/metal.png" class="w-20 h-20" alt="metal">
                <p class="text-center"> Metal: ${resourse.metal} </p>
            </div>
        </article> `;
  });
  resoursesSelection.innerHTML = htmltext;
};

const workResourses = () => {

    
};





(() => {
  showResourses();
})();

// Compare this snippet from scripts/modules/ArmyModule.js:
// const ArmyModule = (function () {
//   let armyArray = [
//     {
//       name: "Horse",
//       priceGold: 100,
//       priceWood: 50,
//       priceMetal: 50,
//       img: "horse.png",
//       category: "war-machine",
//     },
//     {
//       name: "Cannon",
//       priceGold: 300,
//       priceWood: 100,
//       priceMetal: 100,
//       img: "cannon.png",
//       category: "war-machine",
//     },
//     {

//       name: "Catapult",
//       priceGold: 350,
//       priceWood: 100,
//       priceMetal: 150,
//       img: "catapult.png",
//       category: "war-machine",
//     },

//     {
//       name: "Elephant",
//       priceGold: 400,
//       priceWood: 150,
//       priceMetal: 200,
//       img: "elephant.png",
//       category: "war-machine",
//     },
//   ];
//
//   const getall = () => {
//     return structuredClone(armyArray);
//   };
//
//   const addToArmy = (name) => {
//     const warrior = WarriorsModule.getWarrior(name);
//     const warMachine = WarriorsModule.getWarMachine(name);
//
//     if (warrior) {
//       const gold = ResoursesModule.getGold();
//
//       if (gold >= warrior.priceGold) {
//         ResoursesModule.setGold(-warrior.priceGold);
//         armyArray.push(warrior);
//       } else {
//         alert("Not enough gold!");
//       }
//     }
//
//     if (warMachine) {
//       const gold = ResoursesModule.getGold();
//       const wood = ResoursesModule.getWood();
//       const metal = ResoursesModule.getMetal();
//
//       if (gold >= warMachine.priceGold) {
//         ResoursesModule.setGold(-warMachine.priceGold);
//       } else {
//         alert("Not enough gold!");
//       }
//
//       if (wood >= warMachine.priceWood) {
//         ResoursesModule.setWood(-warMachine.priceWood);
//       } else {
//         alert("Not enough wood!");
//       }
//
//       if (metal >= warMachine.priceMetal) {
//         ResoursesModule.setMetal(-warMachine.priceMetal);
//         armyArray.push(warMachine);
//       } else {
//         alert("Not enough metal!");
//       }
//     }
//   };
//
//   const getArmy = () => {
//     return structuredClone(armyArray);
//   };
//
//   const getWarriors = () => {
//     return structuredClone(armyArray).filter(
//       (warrior) => warrior.category === "warrior"
//     );
//   };
//
//   const getWarMachines = () => {
//     return structuredClone(armyArray).filter(
//       (warMachine) => warMachine.category === "war-machine"
//     );
//   };
//
//   const getWarrior = (name) => {

//     return armyArray.find((warrior) => warrior.name === name);
//   };
//
//   const getWarMachine = (name) => {
//     return armyArray.find((warMachine) => warMachine.name === name);
//   };
//
//   const removeFromArmy = (name) => {
//     const warrior = WarriorsModule.getWarrior(name);
//     const warMachine = WarriorsModule.getWarMachine(name);
//
//     if (warrior) {
//       const warriorIndex = armyArray.findIndex(
//         (warrior) => warrior.name === name
//       );
//
//       armyArray.splice(warriorIndex, 1);
//
//       ResoursesModule.setGold(warrior.priceGold);
//     }
//
//     if (warMachine) {
//       const warMachineIndex = armyArray.findIndex(
//         (warMachine) => warMachine.name === name
//       );
//
//       armyArray.splice(warMachineIndex, 1);
//
//       ResoursesModule.setGold(warMachine.priceGold);
//       ResoursesModule.setWood(warMachine.priceWood);
//       ResoursesModule.setMetal(warMachine.priceMetal);
//     }
//   };
//
//   const setArmy = (name, amount) => {
//     const warrior = WarriorsModule.getWarrior(name);
//     const warMachine = WarriorsModule.getWarMachine(name);
//
//     if (warrior) {
//       const gold = ResoursesModule.getGold();
//
//       if (gold >= warrior.priceGold * amount) {
//         ResoursesModule.setGold(-warrior.priceGold * amount);
//
//         for (let i = 0; i < amount; i++) {
//           armyArray.push(warrior);
//         }
//       } else {
//         alert("Not enough gold!");
//       }
//     }
//
//     if (warMachine) {
//       const gold = ResoursesModule.getGold();
//       const wood = ResoursesModule.getWood();
//       const metal = ResoursesModule.getMetal();
//
//       if (gold >= warMachine.priceGold * amount) {
//         ResoursesModule.setGold(-warMachine.priceGold * amount);
//       } else {
//         alert("Not enough gold!");
//       }
//

//       if (wood >= warMachine.priceWood * amount) {
//         ResoursesModule.setWood(-warMachine.priceWood * amount);
//       } else {
//         alert("Not enough wood!");
//       }
//
//       if (metal >= warMachine.priceMetal * amount) {
//         ResoursesModule.setMetal(-warMachine.priceMetal * amount);
//
//         for (let i = 0; i < amount; i++) {
//           armyArray.push(warMachine);
//         }
//       } else {
//         alert("Not enough metal!");
//       }
//     }
//   };
//
//   return {
//     getall,
//     addToArmy,
//     getArmy,
//     getWarriors,
//     getWarMachines,
//     getWarrior,
//     getWarMachine,
//     removeFromArmy,
//     setArmy,
//   };
// })();
//
// export default ArmyModule;
// Compare this snippet from scripts/modules/ShowArmyModule.js:
// import ArmyModule from "./ArmyModule.js";
