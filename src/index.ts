import genArticleSchema from "./schemaGens/genArticleSchema";
import genBreadcrumbListSchema from "./schemaGens/genBeradcrumbListSchema";

import genFaqSchema from "./schemaGens/genFaqSchema";

const generators = { genFaqSchema, genArticleSchema }

// export default generators
export { genFaqSchema, genArticleSchema, genBreadcrumbListSchema }