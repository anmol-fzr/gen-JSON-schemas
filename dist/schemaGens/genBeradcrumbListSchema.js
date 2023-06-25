"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genBreadcrumbListSchema(data) {
    const itemListElement = [];
    data.map(({ name, item }, index) => {
        itemListElement.push({
            "@type": "ListItem",
            "position": index + 1,
            name, item,
        });
    });
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
    };
}
exports.default = genBreadcrumbListSchema;
