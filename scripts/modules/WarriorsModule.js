const WarriorsModule = (() => {
  let warriorsArray = [
    {
      name: "Snake",
      price: 200,
      category: "Warrior",
    },
    {
      name: "Giant",
      price: 500,
      category: "Warrior",
    },
    {
      name: "Big Axe",
      price: 150,
      category: "Warrior",
    },
    {
      name: "Thief",
      price: 50,
      category: "Warrior",
    },
    {
      name: "Tanks",
      price: 250,
      category: "Warrior",
    },
    {
      name: "Berserker",
      price: 275,
      category: "Warrior",
    },
    {
      name: "Horse",
      price: 100,
      category: "war-machine",
    },
    {
      name: "Cannon",
      price: 300,
      category: "war-machine",
    },
    {
      name: "Catapult",
      price: 350,
      category: "war-machine",
    },
    {
      name: "Elephant",
      price: 400,
      category: "war-machine",
    },
  ];

  const getall = () => {
    return warriorsArray;
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
