import React from "react";
interface Props {
    className?: string;
    backgroundColors: [string, string, string];
    foregroundColors: ["normal" | "inverted", "normal" | "inverted", "normal" | "inverted"];
    content: [React.ReactNode, React.ReactNode, React.ReactNode];
}
declare class StackedContentThree extends React.Component<Props> {
    render(): JSX.Element;
}
export { StackedContentThree };
