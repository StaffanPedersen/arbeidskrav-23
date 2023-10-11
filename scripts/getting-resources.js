import ResourcesModule from "./modules/ResoursesModule.js";

const resoursesSelection = document.querySelector("#resources-output");
const gatherResourcesBtnsWood = document.querySelector(
  "#gather-resources-wood"
);
const gatherResourcesBtnMetal = document.querySelector(
  "#gather-resources-metal"
);

// viser resurser på alle sidene.

const showResourses = () => {
  let goldValue = ResourcesModule.getGold();
  let woodValue = ResourcesModule.getWood();
  let metalValue = ResourcesModule.getMetal();

  resoursesSelection.innerHTML = `
        <article class=" sticky top-0 w-28 h-28 flex w-full m-10 justify-evenly  ">
            <div  >
                <img src="images/gold-coin.png" class="w-20 h-20  mobile-resource-img " alt="gold">
                <p class="text-center"> Gold: ${goldValue} </p>
      
            </div>
            <div >
                <img src="images/wood.png" class="w-20 h-20 mobile-resource-img" alt="wood">
                <p class="text-center"> Wood: ${woodValue} </p>
           
            </div>
            <div >
                <img src="images/metal.png" class="w-20 h-20 mobile-resource-img" alt="metal">
                <p class="text-center"> Metal: ${metalValue} </p>
          
            </div>
        </article>    
         `;
};

// funksjon for å beregne innsamlet resurser på getting-resources siden.

// create element button

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
  ResourcesModule.gatherWood();
  showResourses();
});
gatherResourcesBtnMetal.addEventListener("click", () => {
  ResourcesModule.gatherMining();
  showResourses();
});
// funksjon for å lagre resurser i localstorage

(() => {
  showResourses();
})();

export { showResourses };
