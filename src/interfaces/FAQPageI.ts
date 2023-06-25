import SchemaI from './Schema';

export default interface FAQPageI extends SchemaI {
    "mainEntity": QschemaI[];
}

export interface QschemaI {
    "@type": "Question";
    name: string;
    acceptedAnswer: AcceptedAnswerI | AcceptedAnswerI[]
}

interface AcceptedAnswerI {
    "@type": "Answer";
    "text": string;
}
export interface QnaI {
    question: string;
    answer: string;
}
