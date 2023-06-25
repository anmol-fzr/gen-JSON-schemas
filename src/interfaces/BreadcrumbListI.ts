import SchemaI from "./Schema"

export default interface BreadcrumbListI extends SchemaI {
    // "itemListElement": ItemListElementI[] | ItemListElementI;
}



export interface ItemListElementI {
    "@type": "ListItem";
    "position": number;
    "name": string;
    "item": string;
}