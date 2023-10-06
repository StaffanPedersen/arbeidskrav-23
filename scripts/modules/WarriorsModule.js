const WarriorsModule = (() => {
  let warriorsArray = [
    {
      name: "Snake",
      price: 200,
      img: "warrior-1.jpg",
      category: "Warrior",
    },
    {
      name: "Giant",
      price: 500,
      img: "warrior-2.jpg",
      category: "Warrior",
    },
    {
      name: "Big Axe",
      price: 150,
      img: "warrior-3.jpg",
      category: "Warrior",
    },
    {
      name: "Thief",
      price: 50,
      img: "warrior-4.jpg",
      category: "Warrior",
    },
    {
      name: "Tanks",
      price: 250,
      img: "warrior-5.jpg",
      category: "Warrior",
    },
    {
      name: "Berserker",
      price: 275,
      img: "warrior-6.jpg",
      category: "Warrior",
    },
    {
      name: "Horse",
      price: 100,
      img: "horse.png",
      category: "war-machine",
    },
    {
      name: "Cannon",
      price: 300,
      img: "cannon.png",
      category: "war-machine",
    },
    {
      name: "Catapult",
      price: 350,
      img: "catapult.png",
      category: "war-machine",
    },
    {
      name: "Elephant",
      price: 400,
      img: "elephant.png",
      category: "war-machine",
    },
  ];

  const getall = () => {
    return structuredClone(warriorsArray);
  };

  const getWarrior = (name) => {
    return warriorsArray.find((warrior) => warrior.name === name);
  };

  const getWarMachine = (name) => {
    return warriorsArray.find((warMachine) => warMachine.name === name);
  };

  return {
    getall,
    getWarrior,
    getWarMachine,
  };
})();

export default WarriorsModule;
