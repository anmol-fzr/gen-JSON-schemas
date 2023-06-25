const { genArticleSchema } = require("gen-json-schemas");

console.log(genArticleSchema({
    articleURL: "https://anmol-fzr.web.app",
    headline: "headline",
    description: "desc",
    images: [ "https://anmol-fzr.web.app" ],
    authorType: "Person",
    authorUrl: "https://anmol-fzr.web.app",
    publisherLogo: "https://anmol-fzr.web.app",
    datePublished: "2023-02-12",
    dateModified: "2023-02-12",
}));