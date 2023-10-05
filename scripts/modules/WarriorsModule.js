const WarriorModule = (() => { 


    let warriors = [];

    const getWarrior = ( name ) => {
        return warriors.find( warrior => warrior.name === name );
    }

    const addWarrior = ( name, weapon ) => {
        warriors.push( { name, weapon } );
    }

    const removeWarrior = ( name ) => {
        const index = warriors.findIndex( warrior => warrior.name === name );
        warriors.splice( index, 1 );
    }

    return {
        getWarrior,
        addWarrior,
        removeWarrior
    }

})();


export default WarriorModule;



