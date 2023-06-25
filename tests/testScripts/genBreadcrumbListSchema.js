const { genBreadcrumbListSchema } = require("gen-json-schemas");

const data = [
    {
        name: 'How can I make my website load faster?',
        item: `There are several ways to improve website loading speed. You can optimize images by reducing their file size, minimize HTTP requests, enable browser caching, and use content delivery networks (CDNs) to serve static files. Additionally, you can minify and compress CSS and JavaScript files, and consider using asynchronous loading for non-critical resources. Performance testing tools like PageSpeed Insights or GTmetrix can help identify specific areas for improvement.`
    },
    {
        name:
            'What is the difference between front-end and back-end development?',
        item: `Front-end development refers to the creation of the user interface and user experience of a website. It involves coding with languages like HTML, CSS, and JavaScript to design and implement the visual elements and interactivity that users see and interact with directly. Back-end development, on the other hand, focuses on the server-side functionality and infrastructure of a website. It involves working with technologies like databases, server-side languages (e.g., Python, PHP, Ruby), and frameworks to handle data processing, user authentication, and server communication.`
    },
    {
        name:
            'What is responsive web design, and why is it important?',
        item: `Responsive web design is an approach to building websites that ensure optimal viewing and interaction across various devices and screen sizes, such as desktop computers, tablets, and smartphones. It involves creating flexible layouts, fluid images, and media queries to adapt the website's appearance and behavior based on the device's capabilities. Responsive design is crucial because it enhances the user experience, reduces the need for separate mobile versions of a website, and improves search engine optimization (SEO) by providing a consistent experience across different devices.`
    }
];

console.log(JSON.parse(genBreadcrumbListSchema(data)));