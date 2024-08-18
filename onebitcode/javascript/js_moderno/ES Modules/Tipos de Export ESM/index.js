import { inline } from "./inline.js"
//import { inline as novonome } from "./inline.js"
import defaultInline from "./inline.js" //só pode ter um por arquivo

import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js"

//import exportDefault, { group, a, b, c, d } from "./non-inline.js"

inline()
defaultInline()

group()
exportDefault()
