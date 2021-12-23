import * as React from "react";
import { StackedContentContent } from "./StackedContent";
interface Props {
    className?: string;
    contents: StackedContentContent[];
}
declare class StackedContentThree extends React.Component<Props> {
    renderBox1(): JSX.Element;
    renderBox2(): JSX.Element;
    renderBox3(): JSX.Element;
    render(): JSX.Element;
}
export { StackedContentThree };
