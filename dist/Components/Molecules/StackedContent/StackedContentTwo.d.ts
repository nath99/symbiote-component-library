import * as React from "react";
import { StackedContentContent } from "./StackedContent";
interface Props {
    className?: string;
    contents: StackedContentContent[];
}
declare class StackedContentTwo extends React.Component<Props> {
    renderBox1(): JSX.Element;
    renderBox2(): JSX.Element;
    render(): JSX.Element;
}
export { StackedContentTwo };
