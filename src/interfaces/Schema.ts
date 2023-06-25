const schemas = ['Article', 'NewsArticle', 'BlogPosting', 'BreadcrumbList', 'Event', 'FAQPage', 'HowTo', 'JobPosting', 'LocalBusiness', 'Organization', 'Person', 'Product', 'Recipe', 'VideoObject', 'WebSite'] as const

export default interface SchemaI {
    "@context": "https://schema.org";
    "@type": typeof schemas[number];
}