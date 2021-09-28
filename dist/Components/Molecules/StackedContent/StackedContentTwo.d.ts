import * as React from "react";
interface Props {
    className?: string;
    backgroundColors: [string, string];
    foregroundColors: ["normal" | "inverted", "normal" | "inverted"];
    content: [React.ReactNode, React.ReactNode];
}
declare class StackedContentTwo extends React.Component<Props> {
    render(): JSX.Element;
}
export { StackedContentTwo };
