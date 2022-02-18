import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import { addPlant } from './fields.js';
import { usePlants } from './fields.js';



const yearlyPlan = createPlan()

console.log("Welcome to the main module")

console.log(yearlyPlan)




let plantedSeeds = []


plantedSeeds = plantSeeds(yearlyPlan)

console.log(plantedSeeds)