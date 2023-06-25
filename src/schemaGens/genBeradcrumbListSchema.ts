import BreadcrumbListI, { ItemListElementI } from './../interfaces/BreadcrumbListI';
import SchemaI from '../interfaces/Schema';
interface dataI {
    name: string;
    item: string;
}

export default function genBreadcrumbListSchema(data: dataI[]): any {
    const itemListElement: ItemListElementI | ItemListElementI[] = []

    data.map(({ name, item }, index) => {
        itemListElement.push({
            "@type": "ListItem",
            "position": index + 1,
            name, item,
        })
    })

    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
    })
}
