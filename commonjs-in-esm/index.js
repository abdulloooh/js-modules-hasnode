import { addition as addCommonJs, subtraction as subCommonJs } from '../commonJs/module.js'
import { addition as addESM, subtraction as subESM } from '../esm/module.js'

// commonjs
console.log(addCommonJs(1,1));
console.log(subCommonJs(1,1));

// esm
console.log(addESM(1,1));
console.log(subESM(1,1));