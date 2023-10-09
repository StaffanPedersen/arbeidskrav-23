import ResoursesModule from "./modules/ResoursesModule.js";
import LocalstorageModule from "./modules/LocalstorageModule.js";

const resoursesSelection = document.querySelector("#resources-output");
const gatherResourcesBtnsWood = document.querySelector(
  "#gather-resources-wood"
);
const gatherResourcesBtnMetal = document.querySelector(
  "#gather-resources-metal"
);

// viser resurser på alle sidene.

const showResourses = () => {
  // const resourses = ResoursesModule.getall();

  const specificValueString = LocalstorageModule.showsaveResources();
  console.log("Specific value:", specificValueString);
  resoursesSelection.innerHTML = `

        <article class="w-64 h-64   flex w-full  ">
            <div  class="flex-1 p-4 text-center flex items-center justify-center">
                <img src="images/gold-coin.png" class="w-20 h-20  " alt="gold">
                <p class="text-center"> Gold: ${specificValueString[0].gold} </p>
            </div>
            <div class="flex-1 p-4 text-center flex items-center justify-center">
                <img src="images/wood.png" class="w-20 h-20 " alt="wood">
                <p class="text-center"> Wood:${specificValueString[0].wood} </p>
            </div>
            <div class="flex-1 p-4  text-center flex items-center justify-center">
                <img src="images/metal.png" class="w-20 h-20" alt="metal">
                <p class="text-center"> Metal:${specificValueString[0].metal} </p>
            </div>
        </article> `;

  //  resourses.forEach((resourse) => {
  //     htmltext += `
  //         <article class="w-64 h-64   flex w-full  ">
  //             <div  class="flex-1 p-4 text-center flex items-center justify-center">
  //                 <img src="images/gold-coin.png" class="w-20 h-20  " alt="gold">
  //                 <p class="text-center"> Gold: ${resourse.gold} </p>
  //             </div>
  //             <div class="flex-1 p-4 text-center flex items-center justify-center">
  //                 <img src="images/wood.png" class="w-20 h-20 " alt="wood">
  //                 <p class="text-center"> Wood: ${resourse.wood} </p>
  //             </div>
  //             <div class="flex-1 p-4  text-center flex items-center justify-center">
  //                 <img src="images/metal.png" class="w-20 h-20" alt="metal">
  //                 <p class="text-center"> Metal: ${resourse.metal} </p>
  //             </div>
  //         </article> `;
  //   });
  // resoursesSelection.innerHTML = htmltext;
};

// funksjon for å beregne innsamlet resurser på getting-resources siden.

const gatherResourcesWood = () => {
  let randomWood = Math.floor(Math.random() * 100) + 1;
  ResoursesModule.setWood(randomWood);
  showResourses();
};

const gatherResourcesMetal = () => {
  let randomMining = Math.floor(Math.random() * 100) + 1;

  if (randomMining > 75) {
    ResoursesModule.setGold(randomMining);
  } else {
    ResoursesModule.setMetal(randomMining);
  }
  showResourses();
};

// lager bilde elementer som button for å samle resurser.

const createButtonWood = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerHTML = `
  <div class=" cursor-[url(/images/axe-cursor.png),_pointer]      ">
  <img src="/images/woods-of-ghalduz.png" 
    alt="woods-of-ghalduz" width="500" height= auto>
    </div>
    `;
  return button;
};

const createButtonMetal = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerHTML = `
    <div class=" cursor-[url(/images/pickaxe-cursor.png),_pointer]     ">
    <img src="/images/mines-of-thiartha.jpg" 
      alt="woods-of-ghalduz" width="500" height= auto>
      </div>
      `;
  return button;
};

gatherResourcesBtnsWood.appendChild(createButtonWood());
gatherResourcesBtnMetal.appendChild(createButtonMetal());

gatherResourcesBtnsWood.addEventListener("click", () => {
  gatherResourcesWood(), LocalstorageModule.localstoragesave();
});
gatherResourcesBtnMetal.addEventListener("click", () => {
  gatherResourcesMetal(), LocalstorageModule.localstoragesave();
});

// funksjon for å lagre resurser i localstorage

(() => {
  showResourses();
})();
