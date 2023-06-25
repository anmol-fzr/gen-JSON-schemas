const publishers = ["Organization", "Person"] as const

export default interface PublisherI {
    "@type": typeof publishers[number];
    "name": string;
    "logo": LogoI;
};

interface LogoI {
    "@type": "ImageObject";
    "url": string;
};