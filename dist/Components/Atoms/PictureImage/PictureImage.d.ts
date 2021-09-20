import * as React from "react";
interface Breakpoints {
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
interface Props {
    breakpoints: Breakpoints;
    xsImages: string[];
    smImages?: string[];
    mdImages?: string[];
    lgImages?: string[];
    xlImages?: string[];
    altText: string;
    className?: string;
}
export default class PictureImage extends React.Component<Props> {
    render(): JSX.Element;
}
export { PictureImage };
