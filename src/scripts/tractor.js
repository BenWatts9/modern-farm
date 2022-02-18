import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';

export const plantSeeds = (yearPlantingPlan) => {
    let seed = ''
    let plantsArr = []
    for (let i = 0; i < yearPlantingPlan.length; i++) {
        
        for (let j = 0; j < yearPlantingPlan[i].length; j++) {
            if (yearPlantingPlan[i][j] === 'Asparagus'){
                seed = createAsparagus()
                plantsArr.push(seed)

            }
            else if (yearPlantingPlan[i][j] === 'Corn'){
                seed = createCorn()
                plantsArr.push(seed)
            }
            else if (yearPlantingPlan[i][j] === 'Potato'){
                seed = createPotato()
                plantsArr.push(seed)
            }
            else if (yearPlantingPlan[i][j] === 'Soybean'){
                seed = createSoybean()
                plantsArr.push(seed)
            }
            else if (yearPlantingPlan[i][j] === 'Sunflower'){
                seed = createSunflower()
                plantsArr.push(seed)
            }
            else {
                seed = createWheat()
                plantsArr.push(seed)
            }
            
        }            

    }
    return plantsArr

}