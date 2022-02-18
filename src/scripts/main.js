import { createPlan } from './plan.js';

const yearlyPlan = createPlan()

console.log("Welcome to the main module")

console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)