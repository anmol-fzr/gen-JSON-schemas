"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorTypes = ["Person", "Organization"];
function genArticleSchema({ articleURL, headline, description, images, authorType, authorUrl, publisherLogo, datePublished, dateModified }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        "image": [
            ...images
        ],
        "author": {
            "@type": authorType,
            "name": "Author",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Publisher",
            "logo": {
                "@type": "ImageObject",
                "url": publisherLogo
            }
        },
        "datePublished": datePublished,
    };
    if (dateModified) {
        schema.dateModified = dateModified;
    }
    if (articleURL) {
        schema.mainEntityOfPage = {
            "@type": 'WebPage',
            "@id": articleURL
        };
    }
    if (authorUrl) {
        schema.author.url = (new URL(authorUrl)).toString();
    }
    return schema;
}
exports.default = genArticleSchema;
