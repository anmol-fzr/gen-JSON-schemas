
import FAQPageI from "../interfaces/FAQPageI";
import { QschemaI, QnaI } from "../interfaces/FAQPageI";


export default function genFaqSchema(data: QnaI[]): FAQPageI | string {
    const mainEntity: QschemaI[] = [];
    data.map(({ question, answer }: QnaI) => {
        const obj: QschemaI = {
            '@type': "Question",
            name: question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: answer
            }
        };
        mainEntity.push(obj);
    });

    const schema = JSON.stringify({
        '@context': 'https://schema.org',
        "@type": "FAQPage",
        mainEntity,
    });

    return schema
}
