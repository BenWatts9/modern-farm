let allPlants = []

export const addPlant = (seedObj) => {
    allPlants.push(seedObj)
}

export usePlants = () => {
    return allPlants
}


