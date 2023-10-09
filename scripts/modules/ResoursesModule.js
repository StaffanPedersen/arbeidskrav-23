const ResoursesModule = (function () {
  let resourcesArray = [];

  console.log(resourcesArray);

  const getall = () => {
    return resourcesArray;
  };

  const getGold = () => {
    return structuredClone(resourcesArray).find((resourse) => resourse.gold);
  };

  const getWood = () => {
    return structuredClone(resourcesArray).find((resourse) => resourse.wood);
  };

  const getMetal = () => {
    return structuredClone(resourcesArray).find((resourse) => resourse.metal);
  };

  const setGold = (amount) => {
    resourcesArray[0].gold += amount;
  };

  const setWood = (amount) => {
    resourcesArray[0].wood += amount;
  };

  const setMetal = (amount) => {
    resourcesArray[0].metal += amount;
  };

  return {
    getall,
    getGold,
    getWood,
    getMetal,
    setGold,
    setWood,
    setMetal,
  };
})();

export default ResoursesModule;
