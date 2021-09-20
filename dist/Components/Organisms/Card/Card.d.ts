import * as React from "react";
interface CardProps {
    image?: string;
    fullImage: boolean;
    wide?: boolean;
    date?: Date;
    topic?: string;
    heading?: string;
    body?: string;
    callToActionText?: string;
    callToActionLink?: string;
}
declare class Card extends React.Component<CardProps> {
    getMonthString(d: Date): string;
    render(): JSX.Element;
}
export { Card, CardProps };
