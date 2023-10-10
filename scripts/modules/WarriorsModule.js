const WarriorsModule = (() => {
  const warriorsArray = [
    {
      name: "Snake",
      priceGold: 200,
      img: "warrior-1.jpg",
      category: "Warrior",
    },
    {
      name: "Giant",
      priceGold: 500,
      img: "warrior-2.jpg",
      category: "Warrior",
    },
    {
      name: "Big Axe",
      priceGold: 150,
      img: "warrior-3.jpg",
      category: "Warrior",
    },
    {
      name: "Thief",
      priceGold: 50,
      img: "warrior-4.jpg",
      category: "Warrior",
    },
    {
      name: "Tanks",
      priceGold: 250,
      img: "warrior-5.jpg",
      category: "Warrior",
    },
    {
      name: "Berserker",
      priceGold: 275,
      img: "warrior-6.jpg",
      category: "Warrior",
    },
    {
      name: "Horse",
      priceGold: 100,
      priceWood: 50,
      priceMetal: 50,
      img: "horse.png",
      category: "war-machine",
    },
    {
      name: "Cannon",
      priceGold: 300,
      priceWood: 100,
      priceMetal: 100,
      img: "cannon.png",
      category: "war-machine",
    },
    {
      name: "Catapult",
      priceGold: 350,
      priceWood: 100,
      priceMetal: 150,
      img: "catapult.png",
      category: "war-machine",
    },
    {
      name: "Elephant",
      priceGold: 400,
      priceWood: 150,
      priceMetal: 200,
      img: "elephant.png",
      category: "war-machine",
    },
  ];

  const getall = () => {
    return structuredClone(warriorsArray);
  };

  const getallArray = () => {
    const warriorObject = localStorage.getItem("warriors");
    const warriorObjectParsed = JSON.parse(warriorObject);
    return warriorObjectParsed;
  };

  const getWarrior = (name) => {
    return warriorsArray.find((warrior) => warrior.name == name);
  };

  const getWarMachine = (name) => {
    return warriorsArray.find((warMachine) => warMachine.name === name);
  };

  const itemName = "warriors";

  const getAllLocalstorage = () => {
    if (checkIfLocalStorageIsNotEmpty()) {
      return getLocalStorageMoviesParsed();
    } else {
      return [];
    }
  };

  // function for adding warriors to army
  const addWarrior = (newWarrior) => {
    const newObjectRandomId = crypto.randomUUID();
    newWarrior.id = newObjectRandomId;

    const warriorStorageArray = getAllLocalstorage();
    warriorStorageArray.push(newWarrior);

    const warriorStorageArrayString = JSON.stringify(warriorStorageArray);

    localStorage.setItem(itemName, warriorStorageArrayString);
  };

  const checkIfLocalStorageIsNotEmpty = () => {
    if (localStorage.getItem(itemName) != null) {
      return true;
    } else {
      return false;
    }
  };

  const getLocalStorageMoviesParsed = () => {
    return JSON.parse(localStorage.getItem(itemName));
  };

  return {
    getall,
    getallArray,
    getWarrior,
    getWarMachine,
    addWarrior,
    checkIfLocalStorageIsNotEmpty,
  };
})();

export default WarriorsModule;
