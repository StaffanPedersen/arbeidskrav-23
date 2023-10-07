const ResoursesModule = (function () {
  let resoursesArray = [
    {
      gold: 0,
      wood: 0,
      metal: 0,
    },
  ];

  const getall = () => {
    return structuredClone(resoursesArray);
  };

  const getGold = () => {
    return structuredClone(resoursesArray).find((resourse) => resourse.gold);
  };

  const getWood = () => {
    return structuredClone(resoursesArray).find((resourse) => resourse.wood);
  };

  const getMetal = () => {
    return structuredClone(resoursesArray).find((resourse) => resourse.metal);
  };

  const setGold = (amount) => {
    resoursesArray[0].gold += amount;
  };

  const setWood = (amount) => {
    resoursesArray[0].wood += amount;
  };

  const setMetal = (amount) => {
    resoursesArray[0].metal += amount;
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
