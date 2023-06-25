"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genFaqSchema(data) {
    const mainEntity = [];
    data.map(({ question, answer }) => {
        const obj = {
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
    return schema;
}
exports.default = genFaqSchema;
