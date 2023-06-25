import SchemaI from "./Schema"
import AuthorI from "./AuthorI"
import PublisherI from "./PublisherI"

export default interface ArticleI extends SchemaI {
    "mainEntityOfPage"?: mainEntityOfPageI;
    "headline": string;
    "description": string;
    "image": string | string[];
    "author": AuthorI;
    "publisher": PublisherI;
    "datePublished": Date;
    "dateModified"?: Date;
};


interface mainEntityOfPageI {
    "@type": "WebPage";
    "@id": string
}
