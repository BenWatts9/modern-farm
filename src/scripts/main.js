import { createPlan } from './plan.js';
import { addPlant } from './fields.js';
import { usePlants } from './fields.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';

const yearlyPlan = createPlan()
addPlant(yearlyPlan)
const usedPlants = usePlants() 
const plantedSeeds = plantSeeds(usedPlants)
const harvestedPlants = harvestPlants(plantedSeeds)


console.log(harvestedPlants)



