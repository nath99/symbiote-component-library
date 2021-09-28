import * as React from "react";
interface Props {
    className?: string;
    backgroundColors: [string, string, ...string[]];
    foregroundColors: ["normal" | "inverted", "normal" | "inverted", ..."normal"[] | "inverted"[]];
    content: React.ReactNode[];
}
declare class StackedContent extends React.Component<Props> {
    renderStackedContent: () => JSX.Element | undefined;
    render(): JSX.Element | undefined;
}
export { StackedContent };
