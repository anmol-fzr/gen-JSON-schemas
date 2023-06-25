import ArticleI from "../interfaces/ArticleI"

const authorTypes = ["Person", "Organization"] as const;

interface genArticleSchemaI {
    articleURL?: string;
    headline: string;
    description: string;
    images: string[];
    authorType: typeof authorTypes[number];
    authorUrl?: string;
    publisherLogo: string;
    datePublished: Date;
    dateModified?: Date
}

export default function genArticleSchema({ articleURL, headline, description, images, authorType, authorUrl, publisherLogo, datePublished, dateModified }: genArticleSchemaI): ArticleI {
    const schema: ArticleI = {
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
    }

    if (dateModified) {
        schema.dateModified = dateModified
    }
    if (articleURL) {
        schema.mainEntityOfPage = {
            "@type": 'WebPage',
            "@id": articleURL
        }
    }
    if (authorUrl) {
        schema.author.url = (new URL(authorUrl)).toString();
    }
    return schema
}
