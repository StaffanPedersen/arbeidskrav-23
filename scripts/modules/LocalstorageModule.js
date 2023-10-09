import ResoursesModule from "./ResoursesModule.js";

// const LocalstorageModule = (function () {

//   const showsaveResources = () => {
//     // localStorage.setItem("resourses", JSON.stringify(ResoursesModule.getall()));

//     const resoursesStringified = localStorage.getItem("resourses");

//     const resoursesParsed = JSON.parse(resoursesStringified);

//     if (resoursesParsed && resoursesParsed.length > 0) {
//       const resourseslocalstorage = resoursesParsed[0];
//       return resourseslocalstorage;
//     } else {
//       return "no resourses";
//     }
//   };

//   const localstoragesave = () => {
//     const resourses = ResoursesModule.getall();
//     const resoursesStringified = JSON.stringify(resourses);
//     localStorage.setItem("resourses", resoursesStringified);
//   };

//   return {
//     showsaveResources,
//     localstoragesave,
//   };
// })();

// export default LocalstorageModule;

const LocalstorageModule = (function () {
  const showsaveResources = () => {
    if (
      ResoursesModule.newResourcesArray === undefined ||
      ResoursesModule.newResourcesArray.length == 0
    ) {
      return "no showsaveResources";
    } else {
      const resourcesStringified = localStorage.getItem("resources"); // Adjust the key to match your usage
      const resourcesParsed = JSON.parse(resourcesStringified);

      if (resourcesParsed && resourcesParsed.length > 0) {
        return resourcesParsed; // Return the entire array of resources
      } else {
        return "no resources";
      }
    }
    // console.log(resourcesParsed);
  };

  const localstoragesave = () => {
    const gold = ResoursesModule.getGold();
    const metal = ResoursesModule.getMetal();
    const wood = ResoursesModule.getWood();

    const newResourcesArray = {
      gold: gold,
      wood: wood,
      metal: metal,
    };

    // Save to localStorage
    localStorage.setItem("resources", JSON.stringify(newResourcesArray));

    ResoursesModule.resourcesArray.push(newResourcesArray);

    const mediaArrayStringified = JSON.stringify(newResourcesArray);
    localStorage.setItem("array", mediaArrayStringified);

    console.log(newResourcesArray);   
    /*
    let gold = ResoursesModule.getGold();
    let metal = ResoursesModule.getMetal();
    let wood = ResoursesModule.getWood();

    // localStorage.setItem("resources", JSON.stringify(ResoursesModule.getall()));

    let newResourcesArray = {
      gold: gold,
      wood: wood,
      metal: metal,
    };
    ResoursesModule.newResourcesArray.push(newResourcesArray);

    const newMediaStringified = JSON.stringify(newResourcesArray);
    localStorage.setItem("resources", newMediaStringified);

    console.log(ResoursesModule.newResourcesArray);

    const resources = ResoursesModule.getall(); // Assuming you have a getall function in ResoursesModule
    const resourcesStringified = JSON.stringify(resources);
    localStorage.setItem("resources", resourcesStringified); // Adjust the key to match your usage
    */
  };

  return {
    showsaveResources,
    localstoragesave,
  };
})();

export default LocalstorageModule;
