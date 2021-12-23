import * as React from "react";
export interface StackedContentContent {
    backgroundColor: string;
    foregroundColor: string;
    content: React.ReactNode;
}
interface Props {
    className?: string;
    contents: StackedContentContent[];
}
declare class StackedContent extends React.Component<Props> {
    renderStackedContent: () => JSX.Element | undefined;
    render(): JSX.Element | undefined;
}
export { StackedContent };
