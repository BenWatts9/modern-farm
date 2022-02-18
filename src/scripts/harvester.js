export const harvestPlants = (plants) => {
    let seedsArray = []
    

    for (let i = 0; i < plants.length; i++) {
         let seedsOutput = plants[i].output
        for (let j = 0; j < seedsOutput; j++) {
            if (Array.isArray(plants[i])){
                seedsArray.push(plants[i[i]])
            }
            seedsArray.push(plants[i])
        }
    }

    return seedsArray
}