import * as React from "react";
interface Props {
    className?: string;
    backgroundColors: [string, string, string, string];
    foregroundColors: ["normal" | "inverted", "normal" | "inverted", "normal" | "inverted", "normal" | "inverted"];
    content: React.ReactNode[];
}
declare class StackedContentFour extends React.Component<Props> {
    render(): JSX.Element;
}
export { StackedContentFour };
