const ResourcesModule = (function () {
  let resourcesArray = JSON.parse(localStorage.getItem("resources")) || [
    {
      gold: 0,
      wood: 0,
      metal: 0,
    },
  ];

  console.log(resourcesArray);

  const updateLocalStorage = () => {
    localStorage.setItem("resources", JSON.stringify(resourcesArray));
  };

  const getGold = () => {
    return resourcesArray[0].gold;
  };

  const getWood = () => {
    return resourcesArray[0].wood;
  };

  const getMetal = () => {
    return resourcesArray[0].metal;
  };

  const setGold = (amount) => {
    resourcesArray[0].gold += amount;
    updateLocalStorage();
  };

  const setWood = (amount) => {
    resourcesArray[0].wood += amount;
    updateLocalStorage();
  };

  const setMetal = (amount) => {
    resourcesArray[0].metal += amount;
    updateLocalStorage();
  };

  const gatherMining = () => {
    // math random for å få tilfeldig antall resurser.
    const randomMining = Math.floor(Math.random() * 10) + 1;

    if (randomMining < 7.5) {
      setMetal(randomMining);
    } else {
      setGold(randomMining);
    }
  };

  const gatherWood = () => {
    // math random for å få tilfeldig antall resurser.
    const randomWood = Math.floor(Math.random() * 10) + 1;
    setWood(randomWood);
  };

  return {
    getGold,
    getWood,
    getMetal,
    setGold,
    setWood,
    setMetal,
    gatherMining,
    gatherWood,
  };
})();

export default ResourcesModule;
